package com.example.chessEngine.services;

import Agent.*;
import ChessLogic.Board;
import com.example.chessEngine.exception.AgentNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ChessAgentServiceImpl implements ChessAgentService{

    private final Map<String, Agent> blackAgents = Map.of(
            AgentName.RANDOM, new RandomAgent(AgentName.RANDOM, true)
    );

    private final Map<String, Agent> whiteAgents = Map.of(
            AgentName.RANDOM, new RandomAgent(AgentName.RANDOM, false)
    );


    @Override
    public int[] makeMove(String agentName, boolean isBlack, Board state) {
        Map<String, Agent> agents = isBlack ? this.blackAgents : this.whiteAgents;
        Agent agent = agents.get(agentName);
        if (agent == null) {
            throw new AgentNotFoundException();
        }
        int[] move = agent.makeMove(state);
        return move;
    }

}
