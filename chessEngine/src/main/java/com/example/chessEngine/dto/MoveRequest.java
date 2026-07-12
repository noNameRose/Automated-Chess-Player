package com.example.chessEngine.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;

@Builder
@AllArgsConstructor
public class MoveRequest {
    private String[][] state;
    private boolean isBlack;
    private String playerName;
}
