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

  public double evaluate(Agent player) {
    Map<String, Integer> pieceWeight = Map.of(
        PieceRepresentation.PAWN, 1,
        PieceRepresentation.KNIGHT, 3,
        PieceRepresentation.BISHOP, 3,
        PieceRepresentation.QUEEN, 9,
        PieceRepresentation.ROOK, 5,
        PieceRepresentation.KING, 10000000
    );
    double MOBILITY_WEIGHT = 0.5;
    List<Map<String, Integer>> pieceCounts = this.board.countPiece();
    Map<String, List<int[]>> whiteMoves =  this.board.getLegalMoves(false);
    Map<String, List<int[]>> blackMoves = this.board.getLegalMoves(true);
    Map<String, Integer> blackCounts = pieceCounts.get(0);
    Map<String, Integer> whiteCounts = pieceCounts.get(1);
    int numPieceScore = 0;
    int whiteMobility = 0;
    int blackMobility = 0;
    for (List<int[]> moves: whiteMoves.values()) {
      whiteMobility += moves.size();
    }
    for (List<int[]> moves: blackMoves.values()) {
      blackMobility += moves.size();
    }
    for (String pieceType: pieceWeight.keySet()) {
      int weight = pieceWeight.get(pieceType);
      int blacks = 0;
      int whites = 0;
      if (blackCounts.containsKey(pieceType)) {
        blacks += blackCounts.get(pieceType);
      }
      if (whiteCounts.containsKey(pieceType)) {
        whites += whiteCounts.get(pieceType);
      }
      int dif = weight * ((player.isMyPieceIsBlack()) ? (blacks - whites) : (whites - blacks));
      numPieceScore += dif;
    }
    double mobilityScores = MOBILITY_WEIGHT * ((player.isMyPieceIsBlack()) ? (blackMobility - whiteMobility) : (whiteMobility - blackMobility));
    return mobilityScores + numPieceScore;
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
    Board newBoard = this.board.clone();
    newBoard.movePiece(startRow, startCol, endRow, endCol);
    ChessGameState nextState = new ChessGameState(this.otherPlayer, this.currentPlayer, newBoard);
    return nextState;
  }

  public ChessGameState clone() {
    return new ChessGameState(this.currentPlayer, this.otherPlayer, this.board.clone());
  }


}
