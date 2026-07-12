package com.example.chessEngine.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class MoveRequest {
    private String[][] state;
    private boolean isBlack;
    private String playerName;
}
