package com.example.chessEngine.Agent;

import com.example.chessEngine.ChessLogic.Board;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;

import java.util.Map;

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
                      Think fast and answer instantly.
        
                      Board (8x8 grid, row 0 = top):
                      {board}
        
                      Legend:
                      Each piece in a row will be separated by a comma ','.
                      Each row in the board will be separated by a newline.
                      If the representation of a piece starts with "B", then it is a black piece.
                      If the representation of a piece starts with "W" then it is a white piece.
                      KI = King, Q = Queen, R = Rook, B = Bishop, k = Knight, P = Pawn, nu = empty cell.
        
                      Side to move: {side}
        
                      Legal moves (you MUST choose exactly one of these, formatted as from_row,from_col,to_row,to_col):
                      {legalMoves}
        
                      Instructions:
                      1. Analyze the position considering material, piece activity, king safety, pawn structure, and checkmate threats.
                      2. Choose the single best move from the legal moves list above for {side}. Do not choose a move that is not in the list.
                      3. Think extremely fast.
                      4. Respond ONLY with the chosen move as four comma-separated integers, copied exactly as it appears in the list, in this exact format:
        
                      from_row,from_col,to_row,to_col
        
                      Example: 0,1,3,4
        
                      Do not include any other text, punctuation, explanation, or formatting — only the four numbers separated by commas.
    """;
    PromptTemplate promptTemplate = new PromptTemplate(template);
    Prompt prompt = promptTemplate.create(Map.of("board", board.getFen(),
                                                "side", this.isMyPieceIsBlack() ? "Black" : "White",
                                                    "legalMoves", board.getStringLegalMoves(this.isMyPieceIsBlack())

    ));
    int count = 1;
    while (true) {
      count++;
      try {
        System.out.println("Number of attempt: " + count);
        String response = this.claudeChatClient.prompt(prompt).call().content();
        String[] strMoves = response.split(",");
        int[] moves = new  int[] {
            Integer.parseInt(strMoves[0]),
            Integer.parseInt(strMoves[1]),
            Integer.parseInt(strMoves[2]),
            Integer.parseInt(strMoves[3])
        };
        return moves;
      } catch (Exception exception) {
      }
    }
  }
}
