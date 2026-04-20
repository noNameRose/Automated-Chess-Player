package com.example.chessEngine.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgentController {

  @GetMapping("/")
  public ResponseEntity<?> testController() {
    System.out.println("Reached");
    return new ResponseEntity<>("Hello world", HttpStatus.OK);
  }


}
