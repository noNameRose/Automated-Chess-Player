package com.example.chessEngine.Agent;

import com.example.chessEngine.ChessLogic.Board;

public abstract class Agent {
  protected String name;
  protected boolean myPieceIsBlack;

  public String getName() {
    return this.name;
  }

  public boolean isMyPieceIsBlack() {
    return this.myPieceIsBlack;
  }

  public int[] makeMove(Board board, String conversationId) {
    return null;
  }

  abstract public int[] makeMove(Board board);

}
