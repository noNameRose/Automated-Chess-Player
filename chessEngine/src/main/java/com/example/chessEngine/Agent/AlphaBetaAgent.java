package com.example.chessEngine.Agent;

import com.example.chessEngine.ChessLogic.Board;

public class AlphaBetaAgent extends Agent{

  public AlphaBetaAgent(String name, boolean isMyPieceBlack) {
    super.name = name;
    super.myPieceIsBlack = isMyPieceBlack;
  }

  @Override
  public int[] makeMove(Board board) {
    return null;
  }
}
