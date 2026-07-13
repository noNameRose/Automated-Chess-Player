package com.example.chessEngine.services;

import ChessLogic.Board;

public interface ChessAgentService {

    int[] makeMove(String agentName, boolean isBlack, Board state);
}
