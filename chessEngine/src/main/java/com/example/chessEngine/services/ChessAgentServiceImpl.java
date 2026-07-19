package com.example.chessEngine.services;

import com.example.chessEngine.Agent.*;
import com.example.chessEngine.ChessLogic.Board;
import com.example.chessEngine.exception.AgentNotFoundException;
import com.example.chessEngine.exception.IllegalMoveException;
import org.springframework.ai.anthropic.AnthropicChatModel;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ChessAgentServiceImpl implements ChessAgentService{

    private final ChatClient openAiChatClient;
    private final ChatClient claudeChatClient;
    private final Map<String, Agent> blackAgents = new HashMap<>();
    private final Map<String, Agent> whiteAgents = new HashMap<>();


    public ChessAgentServiceImpl(OpenAiChatModel openAiChatModel, AnthropicChatModel anthropicChatModel) {
      this.openAiChatClient = ChatClient.create(openAiChatModel);
      this.claudeChatClient = ChatClient.create(anthropicChatModel);

      this.blackAgents.put(AgentName.RANDOM, new RandomAgent(AgentName.RANDOM, true));
      this.blackAgents.put(AgentName.CHATGPT, new ChatGptAgent(AgentName.CHATGPT, openAiChatClient, true));
      this.blackAgents.put(AgentName.CLAUDE, new ClaudeAgent(AgentName.CLAUDE, claudeChatClient,true));

      this.whiteAgents.put(AgentName.RANDOM, new RandomAgent(AgentName.RANDOM, false));
      this.whiteAgents.put(AgentName.CHATGPT, new ChatGptAgent(AgentName.CHATGPT, openAiChatClient, false));
      this.whiteAgents.put(AgentName.CLAUDE, new ClaudeAgent(AgentName.CLAUDE, claudeChatClient,false));
    }

    @Override
    public int[] makeMove(String agentName, boolean isBlack, Board state) {
        Map<String, Agent> agents = isBlack ? this.blackAgents : this.whiteAgents;
        Agent agent = agents.get(agentName);
        if (agent == null) {
            throw new AgentNotFoundException();
        }
        int[] move = agent.makeMove(state);
        return move;
    }

    @Override
    public boolean isMoveValid(Board board, int[] from, int[] to) {
      boolean isValid = board.movePiece(from[0], from[1], to[0], to[1]);
      if (!isValid) {
        throw new IllegalMoveException();
      }
      return isValid;
    }


}
