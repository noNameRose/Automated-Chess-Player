package com.example.chessEngine.repo;

public interface BoardStateRepo {
    String[][] getBoardStateById(String id);
    void saveBoardState(String id, String[][] state);
}
