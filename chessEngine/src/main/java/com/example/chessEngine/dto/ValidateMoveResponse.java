package com.example.chessEngine.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class ValidateMoveResponse {
  private String[][] state;
  private boolean isGameOver;
  private String move;
}
