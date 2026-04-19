package Agent;

import ChessLogic.Board;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

public class RandomAgent extends Agent{

  public RandomAgent(String name, boolean myPieceIsBlack) {
    super.name = name;
    super.myPieceIsBlack = myPieceIsBlack;
  }

  @Override
  public int[] makeMove(Board board) {

    Map<String, List<int[]>> movesMap = board.getLegalMoves(this.myPieceIsBlack);
    Set<String> piecesPosition = movesMap.keySet();
    String position = null;
    Random random = new Random();
    int randomIndex = random.nextInt(piecesPosition.size());
    int index = 0;

    for (String piecePosition: piecesPosition) {
      if (index == randomIndex) {
        position = piecePosition;
        break;
      }
      index++;
    }

    String[] startCell = position.split(" ");
    List<int[]> availableMoves = movesMap.get(position);
    randomIndex = random.nextInt(availableMoves.size());
    int[] destination = availableMoves.get(randomIndex);
    int startRow = Integer.parseInt(startCell[0]);
    int startCol = Integer.parseInt(startCell[1]);
    int endRow = destination[0];
    int endCol = destination[1];

    return new int[] {startRow, startCol, endRow, endCol};
  }
}
