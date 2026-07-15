package com.example.chessEngine.controller;


import ChessLogic.Board;
import ChessLogic.BoardInitializer;
import com.example.chessEngine.dto.*;
import com.example.chessEngine.services.BoardStateService;
import com.example.chessEngine.services.ChessAgentService;
import org.apache.tomcat.util.http.FastHttpDateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("http://localhost:5173")
public class GameController {

    private final BoardStateService boardStateService;
    private final ChessAgentService chessAgentService;

    @Autowired
    public GameController(BoardStateService boardStateService, ChessAgentService chessAgentService) {
        this.boardStateService = boardStateService;
        this.chessAgentService = chessAgentService;
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


    @PostMapping("/game")
    public ResponseEntity<MoveResponse> getMove(@RequestBody MoveRequest request) {
        Board board = Board.parse(request.getState());
        int[] move = this.chessAgentService.makeMove(request.getPlayerName(), request.isBlack(), board);
        int[] from = new int[] {move[0], move[1]};
        int[] to = new int[] {move[2], move[3]};
        board.movePiece(from[0], from[1], to[0], to[1]);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        MoveResponse.builder()
                                .from(from)
                                .to(to)
                                .isGameOver(board.isGameOver())
                                .state(board.getBoardString())
                                .build()
                );
    }

    @PostMapping("/game/make_move")
    public ResponseEntity<ValidateMoveResponse> validateMove(@RequestBody ValidateMoveRequest request) {
      Board board = Board.parse(request.getState());
      this.chessAgentService.isMoveValid(board, request.getFrom(), request.getTo());
      return ResponseEntity
          .status(HttpStatus.ACCEPTED)
          .body(
              ValidateMoveResponse
                  .builder()
                  .state(board.getBoardString())
                  .isGameOver(board.isGameOver())
                  .build()
          );
    }

}
