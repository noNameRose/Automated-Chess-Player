package com.example.chessEngine;

import Agent.Agent;
import Agent.HumanAgent;
import Agent.RandomAgent;
import ChessLogic.Board;
import ChessLogic.BoardInitializer;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChessEngineApplication {

	public static void main(String[] args) {
    SpringApplication.run(ChessEngineApplication.class, args);

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
