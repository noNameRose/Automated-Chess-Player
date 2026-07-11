package com.example.chessEngine.controller;


import com.example.chessEngine.services.BoardStateService;
import com.example.chessEngine.services.BoardStateServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

    private final BoardStateService boardStateService;

    @Autowired
    public GameController(BoardStateService boardStateService) {
        this.boardStateService = boardStateService;
    }

    @GetMapping("/game/{id}")
    public ResponseEntity<String[][]> getBoardState(@PathVariable  String id) {
        String[][] state = this.boardStateService.getBoardState(id);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(state);
    }
}
