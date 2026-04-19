package Agent;

import ChessLogic.Board;

public abstract class Agent {
  protected String name;
  protected boolean myPieceIsBlack;

  public String getName() {
    return this.name;
  }

  public boolean isMyPieceIsBlack() {
    return this.myPieceIsBlack;
  }

  abstract public int[] makeMove(Board board);
}
