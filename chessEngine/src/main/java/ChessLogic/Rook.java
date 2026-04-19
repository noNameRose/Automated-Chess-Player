package ChessLogic;

public class Rook extends Piece{
  public Rook(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_ROOK : PieceRepresentation.WHITE_ROOK;
  }


  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    return (board.verifyHorizontal(this.row, this.col, endRow, endCol) ||
            board.verifyVertical(this.row, this.col, endRow, endCol)
           ) &&
            board.verifySourceAndDestination(this.row, this.col, endRow, endCol, this.isBlack)
        ;
  }
}
