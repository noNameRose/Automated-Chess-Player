package com.example.chessEngine.controller;


import ChessLogic.BoardInitializer;
import com.example.chessEngine.dto.StateResponse;
import com.example.chessEngine.services.BoardStateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("http://localhost:5173/*")
public class GameController {

    private final BoardStateService boardStateService;

    @Autowired
    public GameController(BoardStateService boardStateService) {
        this.boardStateService = boardStateService;
    }


    @GetMapping("/game")
    public ResponseEntity<StateResponse> startGame() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(StateResponse
                        .builder()
                        .state(BoardInitializer.congig).
                        build());
    }

    @GetMapping("/game/{id}")
    public ResponseEntity<String[][]> getBoardState(@PathVariable  String id) {
        String[][] state = this.boardStateService.getBoardState(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(state);
    }
}
