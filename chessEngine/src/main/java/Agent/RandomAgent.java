package Agent;

import ChessLogic.Board;

public class RandomAgent extends Agent{

  public RandomAgent(String name, boolean myPieceIsBlack) {
    super.name = name;
    super.myPieceIsBlack = myPieceIsBlack;
  }

  @Override
  public int[] makeMove(Board board) {

    return new int[0];
  }
}
