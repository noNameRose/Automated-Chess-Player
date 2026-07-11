package com.example.chessEngine.services;


import com.example.chessEngine.repo.BoardStateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardStateServiceImpl implements BoardStateService{

    private final BoardStateRepo boardStateRepo;

    @Autowired
    public BoardStateServiceImpl(BoardStateRepo boardStateRepo) {
        this.boardStateRepo = boardStateRepo;
    }

    @Override
    public String[][] getBoardState(String id) {
        return this.boardStateRepo.getBoardStateById(id);
    }
}
