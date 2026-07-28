package com.example.chessEngine.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class MoveResponse {
    private String[][] state;
    private int[] from;
    private int[] to;
    private boolean isGameOver;
    private String move;
}
