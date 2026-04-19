package ChessLogic;

public class Bishop extends Piece{

  public Bishop(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_BISHOP : PieceRepresentation.WHITE_BISHOP;
  }


  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    return board.verifyDiagonal(this.row, this.col, endRow, endCol) &&
           board.verifySourceAndDestination(this.row, this.col, endRow, endCol, this.isBlack);
  }

  @Override
  public Piece clone() {
    return new Bishop(this.row, this.col, this.isBlack);
  }


}
