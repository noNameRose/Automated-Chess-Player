package com.example.chessEngine.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class StateResponse {
    private String conversationId;
    private String[][] state;
}
