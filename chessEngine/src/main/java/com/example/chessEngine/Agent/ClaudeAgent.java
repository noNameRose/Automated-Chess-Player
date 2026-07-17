package com.example.chessEngine.Agent;

import com.example.chessEngine.ChessLogic.Board;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.PromptTemplate;

public class ClaudeAgent extends Agent{

  private final ChatClient claudeChatClient;

  public ClaudeAgent(String name, ChatClient claudeChatClient, boolean isMyPieceBlack) {
      super.name = name;
      super.myPieceIsBlack = isMyPieceBlack;
      this.claudeChatClient = claudeChatClient;

  }

  @Override
  public int[] makeMove(Board board) {


    return null;
  }
}
