package com.example.chessEngine.controller;


import com.example.chessEngine.dto.ErrorDetails;
import com.example.chessEngine.exception.BoardStateNotFoundException;
import com.example.chessEngine.exception.IllegalMoveException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(BoardStateNotFoundException.class)
    public ResponseEntity<ErrorDetails> boardStateNotFoundExceptionHandler() {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(
                        ErrorDetails
                                .builder()
                                .error("State not found for this id")
                                .build()
                );
    }

    @ExceptionHandler(IllegalMoveException.class)
    public ResponseEntity<ErrorDetails> illegalMoveExceptionHandler() {
      return ResponseEntity
          .status(HttpStatus.BAD_REQUEST)
          .body(
              ErrorDetails
                  .builder()
                  .error("The move is illegal")
                  .build()
          );
    }
}
