package ChessLogic;

public class Pawn extends Piece{

  public Pawn(int row, int col, boolean isBlack) {
    super.row = row;
    super.col = col;
    super.isBlack = isBlack;
    super.representation = isBlack ? '\u265F' : '\u2659';

  }

  @Override
  public boolean isMoveLegal(Board board, int endRow, int endColo) {
    return false;
  }
}
