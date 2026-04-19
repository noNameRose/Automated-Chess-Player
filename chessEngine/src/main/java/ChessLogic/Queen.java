package ChessLogic;

public class Queen extends Piece {

  public Queen(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_QUEEN : PieceRepresentation.WHITE_QUEEN;
  }


  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    return board.verifyDiagonal(this.row, this.col, endRow, endCol) ||
          board.verifyVertical(this.row, this.col, endRow, endCol) ||
          board.verifyHorizontal(this.row, this.col, endRow, endCol);
  }
}
