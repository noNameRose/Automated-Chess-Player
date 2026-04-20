package com.example.chessEngine;

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
	}

}
