package com.example.chessEngine.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@AllArgsConstructor
@Getter
@Setter

public class ValidateMoveRequest {
  private String[][] state;
  private int[] from;
  private int[] to;
}
