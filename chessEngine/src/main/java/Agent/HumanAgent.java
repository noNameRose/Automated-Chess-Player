package Agent;

import ChessLogic.Board;
import ChessLogic.Piece;

import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class HumanAgent extends Agent{
  public HumanAgent(String name, boolean myPieceBlack) {
    super.name = name;
    super.myPieceIsBlack = myPieceBlack;
  }

  private String askUser(String messege) {
    System.out.println(messege);
    Scanner scanner = new Scanner(System.in);
    String input = scanner.nextLine();
    scanner.close();
    return input;
  }

  @Override
  public int[] makeMove(Board board) {
    int[] move = null;
    Map<String, List<int[]>> legalMoves = board.getLegalMoves(super.myPieceIsBlack);
    while (move == null) {
      board.display();
      System.out.println((super.myPieceIsBlack ? "Black" : "White") + " to play");
      System.out.println("Legals move are: ");

      // loop through all piece
      for (String position: legalMoves.keySet()) {
        String[] coordinate = position.split(" ");
        int row = Integer.parseInt(coordinate[0]);
        int col = Integer.parseInt(coordinate[1]);
        Piece piece = board.getPiece(row, col);
        System.out.print(piece + " can move to: ");

        // Print out all moves
        for (int[] dest: legalMoves.get(position)) {
          System.out.print("(" + dest[0] + ", " + dest[1] + ") ");
        }
      }

      String input = this.askUser("Enter your move as start_row start_col end_row end_col");
      try {
        String[] action = input.split(" ");
        int startRow = Integer.parseInt(action[0]);
        int startCol = Integer.parseInt(action[1]);
        int endRow = Integer.parseInt(action[2]);
        int endCol = Integer.parseInt(action[3]);

        move = new int[] {startRow, startCol, endRow, endCol};

      } catch (Exception exception) {
        move = null;
      }

      if (move == null) {
        System.out.println("The move is not valid, please try again");
      }

      else {
        String position = move[0] + " " + move[1];
        if (!legalMoves.containsKey(position)) {
          System.out.println("The move is not valid, please try again");
          move = null;
        }
        else {
          List<int[]> actions = legalMoves.get(position);
          boolean isFound = false;
          for (int[] action: actions) {
            if (action[0] == move[2] && action[1] == move[3]) {
              isFound = true;
              break;
            }
          }

          if (!isFound) {
            move = null;
            System.out.println("The move is not valid, please try again");
          }
        }
      }

    }
    return  move;
  }
}
