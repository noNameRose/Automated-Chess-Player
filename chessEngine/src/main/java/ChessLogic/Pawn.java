package ChessLogic;

public class Pawn extends Piece{

  public Pawn(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_PAWN_CODE : PieceRepresentation.WHITE_PAWN_CODE;

  }

  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    if (!board.verifySourceAndDestination(this.row, this.col, endRow, endCol, super.isBlack)) {
      return false;
    }

    if (board.verifyVertical(super.row, super.col, endRow, endCol) && board.getPiece(endRow, endCol) == null) {
      if (super.isBlack) {
        return (endRow == super.row + 1) || ((endRow == super.row + 2) && super.row == 1);
      }
      else {
        return (endRow == super.row - 1) || ((endRow == super.row - 2) && super.row == 6);
      }
    }

    else if (endCol == this.col + 1 || endCol == this.col - 1) {
      if (board.getPiece(endRow, endCol) != null && board.getPiece(endRow, endCol).isBlack != super.isBlack) {
        if (super.isBlack) {
          return endRow == this.row + 1;
        }
        else {
          return endRow == this.row - 1;
        }
      }
    }

    return false;
  }


  @Override
  public Piece clone() {
    return new Pawn(this.row, this.col, this.isBlack);
  }
}
