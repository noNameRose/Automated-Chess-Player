package ChessLogic;



public final class BoardInitializer {
  private static final int ROWS = 8;
  private static final int COLS = 8;
  private static final String[][] congig = {
      {"br", "bkn", "bb", "bq", "bk", "bb", "bkn", "br"},
      {"bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"},
      {null, null, null, null, null, null, null, null },
      {null, null, null, null, null, null, null, null },
      {null, null, null, null, null, null, null, null },
      {null, null, null, null, null, null, null, null },
      {"wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"},
      {"wr", "wkn", "wb", "wq", "wk", "wb", "wkn", "wr"},
  };

  public static void initialize(Board board) {

    for (int i = 0; i < ROWS; i++) {
      for (int j = 0; j < COLS; j++) {
        String pieceStr = congig[i][j];
        if (pieceStr != null) {
          char color = pieceStr.charAt(0);
          boolean isBlack = color == 'b';
          String pieceName = pieceStr.substring(1);
          switch (pieceName) {
            case "p":
              board.setPiece(i, j, new Pawn(i, j, isBlack));
              break;
            case "r":
              board.setPiece(i, j, new Rook(i, j, isBlack));
              break;
            case "kn":
              board.setPiece(i, j, new Knight(i, j, isBlack));
              break;
            case "b":
              board.setPiece(i, j, new Bishop(i, j, isBlack));
              break;
            case "q":
              board.setPiece(i, j, new Queen(i, j, isBlack));
              break;
            case "k":
              board.setPiece(i, j, new King(i, j, isBlack));
              break;
          }
        }
      }
    }
  }
}
