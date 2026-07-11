package com.example.chessEngine.services;


import com.example.chessEngine.repo.BoardStateRepo;
import org.apache.tomcat.util.http.FastHttpDateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardStateService {

    private final BoardStateRepo boardStateRepo;

    @Autowired
    public BoardStateService(BoardStateRepo boardStateRepo) {
        this.boardStateRepo = boardStateRepo;
    }

    public String[][] getBoardState(String id) {
        return this.boardStateRepo.getBoardStateById(id);
    }
}
