package com.example.chessEngine.dto;


import lombok.*;

@Builder
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ValidateMoveRequest {
  private String[][] state;
  private int[] from;
  private int[] to;
}
