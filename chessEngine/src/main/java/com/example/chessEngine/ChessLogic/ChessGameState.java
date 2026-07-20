package com.example.chessEngine.ChessLogic;

import com.example.chessEngine.Agent.Agent;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ChessGameState {

  private Agent currentPlayer;
  private Agent otherPlayer;
  private Board board;

  public ChessGameState(Agent currentPlayer, Agent otherPlayer, Board board) {
    this.currentPlayer = currentPlayer;
    this.otherPlayer = otherPlayer;
    this.board = board;
  }

  public boolean isTerminal() {
    return this.board.isGameOver();
  }

  public List<int[]> getActions(boolean isBlack) {
    Map<String, List<int[]>> moves = this.board.getLegalMoves(isBlack);
    List<int[]> actions = new ArrayList<>();
    for (String from: moves.keySet()) {
      List<int[]> tos = moves.get(from);
      String[] froms = from.split(" ");
      int startRow = Integer.parseInt(froms[0]);
      int startCol = Integer.parseInt(froms[1]);
      for (int[] to: tos) {
        actions.add(new int[] {
            startRow,
            startCol,
            to[0],
            to[1]
        });
      }
    }
    return actions;
  }

  public ChessGameState result(int[] moves) {
    int startRow = moves[0];
    int startCol = moves[1];
    int endRow = moves[2];
    int endCol = moves[3];
    Board newBoard =
  }


}
