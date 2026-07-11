package com.example.chessEngine.dto;


import lombok.*;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ErrorDetails {
    private String message;
}
