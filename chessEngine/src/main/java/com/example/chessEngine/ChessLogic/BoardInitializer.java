package com.example.chessEngine.ChessLogic;



public final class BoardInitializer {

  private static final int ROWS = 8;
  private static final int COLS = 8;
  public static final String[][] congig = {
      {"BR", "BK", "BB", "BQ", "BKI", "BB", "BK", "BR"},
      {"BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP"},
      {null, null, null, null, null, null, null, null },
      {null, null, null, null, null, null, null, null },
      {null, null, null, null, null, null, null, null },
      {null, null, null, null, null, null, null, null },
      {"WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"},
      {"WR", "WK", "WB", "WQ", "WKI", "WB", "WK", "WR"},
  };

  public static void initialize(Board board) {

    for (int i = 0; i < ROWS; i++) {
      for (int j = 0; j < COLS; j++) {
        String pieceStr = congig[i][j];
        if (pieceStr != null) {
          char color = pieceStr.charAt(0);
          boolean isBlack = color == 'B';
          String pieceName = pieceStr.substring(1);
          switch (pieceName) {
            case "P":
              board.setPiece(i, j, new Pawn(i, j, isBlack));
              break;
            case "R":
              board.setPiece(i, j, new Rook(i, j, isBlack));
              break;
            case "K":
              board.setPiece(i, j, new Knight(i, j, isBlack));
              break;
            case "B":
              board.setPiece(i, j, new Bishop(i, j, isBlack));
              break;
            case "Q":
              board.setPiece(i, j, new Queen(i, j, isBlack));
              break;
            case "KI":
              board.setPiece(i, j, new King(i, j, isBlack));
              break;
          }
        }
      }
    }
  }
}
