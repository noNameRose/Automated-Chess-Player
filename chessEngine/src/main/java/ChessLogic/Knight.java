package ChessLogic;

public class Knight extends Piece{

  public Knight(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_KNIGHT : PieceRepresentation.WHITE_KNIGHT;
  }


  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    int dy = Math.abs(endRow - this.row);
    int dx = Math.abs(endCol - this.col);
    return (dy == 2 && dx == 1) || (dx == 2 && dy == 1);
  }
}
