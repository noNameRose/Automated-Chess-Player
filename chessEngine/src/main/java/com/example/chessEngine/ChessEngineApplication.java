package com.example.chessEngine;

import ChessLogic.Board;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChessEngineApplication {

  @Value("${claude.api.key}")
  public String apiKey;

  @PostConstruct
  public void init() {
    System.out.println("api key: " + apiKey);
  }

	public static void main(String[] args) {
    SpringApplication.run(ChessEngineApplication.class, args);
	}

}
