package ChessLogic;

public class Pawn extends Piece{

  public Pawn(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_PAWN : PieceRepresentation.WHITE_PAWN;

  }

  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
  }
}
