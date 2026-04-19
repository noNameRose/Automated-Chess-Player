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
    int dy = endCol - this.col;
    int dx = endRow - this.row;

    if (dx < -1 || dx > 1) {
      return false;
    }
    if (this.isBlack && this.row != 6 && dy != 1) {
      return false;
    }
    if (this.isBlack && this.row == 6 && dy != 1 && dy != 2) {
      return false;
    }
    if (!this.isBlack && this.row != 1 && dy != -1) {
      return false;
    }
    if (!this.isBlack && this.row == 1 && dy != -1 && dy != 2) {
      return false;
    }
    return board.verifySourceAndDestination(this.row, this.col, endRow, endCol, this.isBlack);
  }
}
