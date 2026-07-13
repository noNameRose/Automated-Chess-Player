package ChessLogic;

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
  public static final String WHITE_KNIGHT = "WK";
  public static final String WHITE_BISHOP = "WB";
  public static final String WHITE_ROOK = "WR";
  public static final String WHITE_QUEEN = "WQ";
  public static final String WHITE_KING = "WKI";


  public static final String BLACK_PAWN = "BP";
  public static final String BLACK_KNIGHT = "BK";
  public static final String BLACK_BISHOP = "BB";
  public static final String BLACK_ROOK = "BR";
  public static final String BLACK_QUEEN = "BQ";
  public static final String BLACK_KING = "BKI";

  public static final String PAWN = "P";
  public static final String BISHOP = "B";
  public static final String KING = "KI";
  public static final String QUEEN = "Q";
  public static final String KNIGHT = "K";
  public static final String ROOK = "R";


  public static String getPieceString(Piece piece) {
    boolean isBlack = piece.isBlack();
    char representation = piece.representation;
    if (representation == WHITE_BISHOP_CODE) {
      return WHITE_BISHOP;
    }
    if (representation == WHITE_PAWN_CODE) {
      return WHITE_PAWN;
    }
    if (representation == WHITE_KING_CODE) {
      return WHITE_KING;
    }
    if (representation == WHITE_KNIGHT_CODE) {
      return WHITE_;
    }
    if (representation == WHITE_BISHOP_CODE) {
      return WHITE_BISHOP;
    }
    if (representation == WHITE_BISHOP_CODE) {
      return WHITE_BISHOP;
    }





  }





}
