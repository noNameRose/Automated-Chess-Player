package com.example.chessEngine.Agent;

import com.example.chessEngine.ChessLogic.Board;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.PromptTemplate;

public class ClaudeAgent extends Agent{

  private final ChatClient claudeChatClient;

  public ClaudeAgent(String name, ChatClient claudeChatClient, boolean isMyPieceBlack) {
      super.name = name;
      super.myPieceIsBlack = isMyPieceBlack;
      this.claudeChatClient = claudeChatClient;

  }

  @Override
  public int[] makeMove(Board board) {
    String template = """
           You are a chess engine assistant. 
           You will be given a chess board represented as an 8x8 grid, where row 0 is the top of the board and column 0 is the left side. 
           Analyze the position and return the best move.
        
           Board (8x8 grid, row 0 = top):
           {board_grid}
        
           Legend: 
           If the representation of a piece start with "B", then it is a black piece
           If the representation of a piece start with "W" then it is a white piece
           KI = King, Q = Queen, R = Rook, B = Bishop, k = Knight, P = Pawn
        
           Side to move: {side}
        
           Instructions:
           1. Analyze the position considering material, piece activity, king safety, and pawn structure.
           2. Choose the best legal move for {white_or_black}.
           3. Respond ONLY with four comma-separated integers, in this exact format:
        
           from_row, from_col, to_row, to_col
        
           Example: 0, 1, 3, 4
        
           Do not include any other text, punctuation, explanation, or formatting — only the four numbers separated by commas.
    """;

    return null;
  }
}
