package ChessLogic;

public abstract  class Piece {
  protected int row;
  protected int col;

  protected  boolean isBlack;

  protected  char representation;

  public abstract boolean isMoveLegal(Board board, int endRow, int endColo);

  public  void setPosition(int row, int col) {
    this.row = row;
    this.col = col;
  }

  public int getRow() {
    return this.row;
  }

  public int getCol() {
    return this.col;
  }

  public boolean isBlack() {
    return this.isBlack;
  }


  @Override
  public String toString() {
    return this.representation + "";
  }
}
