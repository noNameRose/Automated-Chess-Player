package com.example.chessEngine.ChessLogic;

public final class PieceRepresentation {

  public static final char WHITE_PAWN_CODE = '\u2659';
  public static final char WHITE_KNIGHT_CODE = '\u2658';
  public static final char WHITE_BISHOP_CODE = '\u2657';
  public static final char WHITE_ROOK_CODE = '\u2656';
  public static final char WHITE_QUEEN_CODE = '\u2655';
  public static final char WHITE_KING_CODE = '\u2654';

  public static final char BLACK_PAWN_CODE = '\u265F';
  public static final char BLACK_KNIGHT_CODE = '\u265E';
  public static final char BLACK_BISHOP_CODE = '\u265D';
  public static final char BLACK_ROOK_CODE = '\u265C';
  public static final char BLACK_QUEEN_CODE = '\u265B';
  public static final char BLACK_KING_CODE = '\u265A';


  public static final String WHITE_PAWN = "WP";
  public static final String WHITE_KNIGHT = "WN";
  public static final String WHITE_BISHOP = "WB";
  public static final String WHITE_ROOK = "WR";
  public static final String WHITE_QUEEN = "WQ";
  public static final String WHITE_KING = "WK";


  public static final String BLACK_PAWN = "BP";
  public static final String BLACK_KNIGHT = "BN";
  public static final String BLACK_BISHOP = "BB";
  public static final String BLACK_ROOK = "BR";
  public static final String BLACK_QUEEN = "BQ";
  public static final String BLACK_KING = "BK";

  public static final String PAWN = "P";
  public static final String BISHOP = "B";
  public static final String KING = "K";
  public static final String QUEEN = "Q";
  public static final String KNIGHT = "N";
  public static final String ROOK = "R";


  public static String getPieceString(Piece piece) {
    boolean isBlack = piece.isBlack();
    String type = piece.type;
    if (type.equals(PAWN)) {
      return isBlack ? BLACK_PAWN : WHITE_PAWN;
    }
    if (type.equals(ROOK)) {
      return isBlack ? BLACK_ROOK : WHITE_ROOK;
    }
    if (type.equals(KNIGHT)) {
      return isBlack ? BLACK_KNIGHT : WHITE_KNIGHT;
    }
    if (type.equals(BISHOP)) {
      return isBlack ? BLACK_BISHOP : WHITE_BISHOP;
    }
    if (type.equals(KING)) {
      return isBlack ? BLACK_KING : WHITE_KING;
    }
    return isBlack ? BLACK_QUEEN : WHITE_QUEEN;
  }

  public static String getFileAndRank(int row, int col) {
    return  ((char) (col + 'a')) + "" + (8 - row);
  }

  public static String getFile(int col) {
    return ((char) (col + 'a')) + "";
  }

  public static String getMoveNotation(Board board, int[] from, int[] to) {
    Piece piece = board.getPiece(from[0], from[1]);
    Piece capturePiece = board.getPiece(to[0], to[1]);
    String type = piece.type;
    String move = "";
    // If piece is not a pawn
    if (!type.equals(PAWN)) {
      move += type;
    } // If piece is a pawn
    else {
      move += getFileAndRank(to[0], to[1]);
      // If the pawn simply move forward
      if (capturePiece == null) {
        // File and rank is enough as notation
        return move;
      } // If the pawn capture a piece
      else {
        move = getFile(from[1]) + "x";
      }
      return move + getFileAndRank(to[0], to[1]);
    }
    if (capturePiece != null) {
      move += "x";
    }
    move += getFileAndRank(to[0], to[1]);
    return move;
  }





}
