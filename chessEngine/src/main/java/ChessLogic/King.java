package ChessLogic;

public class King extends Piece{

  public King(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? PieceRepresentation.BLACK_KING : PieceRepresentation.WHITE_KING;
  }


  @Override
  public boolean isMoveLegal(Board board, int endRow, int endCol) {
    return board.verifyAdjacent(this.row, this.col, endRow, endCol) &&
           board.verifySourceAndDestination(this.row, this.col, endRow, endCol, this.isBlack);
  }

  @Override
  public Piece clone() {
    return new King(this.row, this.col, this.isBlack);
  }
}
