package Testing;

import com.example.chessEngine.Agent.Agent;
import com.example.chessEngine.Agent.RandomAgent;
import com.example.chessEngine.Agent.HumanAgent;
import com.example.chessEngine.ChessLogic.Board;
import com.example.chessEngine.ChessLogic.BoardInitializer;

public class Game {
  public static void main(String[] args) {
    Board board = new Board();
    BoardInitializer.initialize(board);
    board.display();

    Agent player1 = new HumanAgent("Human Agent", true);
    Agent player2 = new RandomAgent("Random Agent", false);
    while (true) {

      // Player 1 makes move
      int[] move  = player1.makeMove(board);
      board.movePiece(move[0], move[1], move[2], move[3]);
      board.display();
      if (board.isGameOver()) {
        System.out.println(player1.getName() + " has won the game");
        break;
      }


      // Player 2 makes move
      move = player2.makeMove(board);
      board.movePiece(move[0], move[1], move[2], move[3]);
      if (board.isGameOver()) {
        System.out.println(player2.getName() + " has won the game");
        break;
      }
    }
  }
}
