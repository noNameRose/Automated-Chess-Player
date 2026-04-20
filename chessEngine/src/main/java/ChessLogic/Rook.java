package ChessLogic;

public class Rook extends Piece{
  public Rook(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_ROOK_CODE : PieceRepresentation.WHITE_ROOK_CODE;
  }


  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    return board.verifySourceAndDestination(this.row, this.col, endRow, endCol, this.isBlack) && (board.verifyHorizontal(this.row, this.col, endRow, endCol) ||
            board.verifyVertical(this.row, this.col, endRow, endCol)
           )

        ;
  }


  @Override
  public Piece clone() {
    return new Queen(this.row, this.col, this.isBlack);
  }
}
