package com.example.chessEngine.services;

import com.example.chessEngine.ChessLogic.Board;
import com.example.chessEngine.Agent.Agent;
import com.example.chessEngine.Agent.AgentName;
import com.example.chessEngine.Agent.RandomAgent;
import com.example.chessEngine.exception.AgentNotFoundException;
import com.example.chessEngine.exception.IllegalMoveException;
import org.springframework.ai.anthropic.AnthropicChatModel;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ChessAgentServiceImpl implements ChessAgentService{

    private final ChatClient openAiChatClient;
    private final ChatClient claudeChatClient;

    public ChessAgentServiceImpl(OpenAiChatModel openAiChatModel, AnthropicChatModel anthropicChatModel) {
      this.openAiChatClient = ChatClient.create(openAiChatModel);
      this.claudeChatClient = ChatClient.create(anthropicChatModel);
    }

    private final Map<String, Agent> blackAgents = Map.of(
            AgentName.RANDOM, new RandomAgent(AgentName.RANDOM, true)
    );

    private final Map<String, Agent> whiteAgents = Map.of(
            AgentName.RANDOM, new RandomAgent(AgentName.RANDOM, false)
    );


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
