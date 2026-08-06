package com.example.chessEngine.services;

import com.example.chessEngine.ChessLogic.Board;

public interface ChessAgentService {

    int[] makeMove(String agentName, boolean isBlack, Board state, String conversationId);
    boolean isMoveValid(Board state, int[] from, int[] to);
}
