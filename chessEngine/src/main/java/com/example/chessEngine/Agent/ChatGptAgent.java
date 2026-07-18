package com.example.chessEngine.Agent;

import com.example.chessEngine.ChessLogic.Board;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;

import java.util.Map;

public class ChatGptAgent extends Agent{
  private final ChatClient chatGptChatClient;

  public ChatGptAgent(String name, ChatClient chatGptChatClient, boolean isMyPieceBlack) {
    super.name = name;
    super.myPieceIsBlack = isMyPieceBlack;
    this.chatGptChatClient = chatGptChatClient;
  }

  @Override
  public int[] makeMove(Board board) {
    String template = """
           You are a chess engine assistant. 
           You will be given a chess board represented as an 8x8 grid, where row 0 is the top of the board and column 0 is the left side. 
           Analyze the position and return the best move.
        
           Board (8x8 grid, row 0 = top):
           {board}
        
           Legend: 
           If the representation of a piece start with "B", then it is a black piece
           If the representation of a piece start with "W" then it is a white piece
           KI = King, Q = Queen, R = Rook, B = Bishop, k = Knight, P = Pawn
        
           Side to move: {side}
        
           Instructions:
           1. Analyze the position considering material, piece activity, king safety, and pawn structure.
           2. Choose the best legal move for {side}.
           3. Respond ONLY with four comma-separated integers, in this exact format:
        
           from_row, from_col, to_row, to_col
        
           Example: 0, 1, 3, 4
        
           Do not include any other text, punctuation, explanation, or formatting — only the four numbers separated by commas.
    """;
    PromptTemplate promptTemplate = new PromptTemplate(template);
    Prompt prompt = promptTemplate.create(Map.of("board", board.toString(), "side", this.isMyPieceIsBlack() ? "Black" : "White"));
    String response = this.chatGptChatClient.prompt(prompt).call().content();
    String[] moves = response.split(", ");

    return new int[] {
        Integer.parseInt(moves[0]),
        Integer.parseInt(moves[1]),
        Integer.parseInt(moves[2]),
        Integer.parseInt(moves[3])
    };
  }
}
