import { Card } from "../pages/MemoryBoard/interfaces/card.interface";
import { Game } from "./gameClass";
import { cleanup } from '@testing-library/react';

type GameState = {
    cards: Card[],
    isGameOver: boolean,
    selectedCards: Card[],
    startTime: number,
    endTime: number,
    totalAttempts: number
}

const initialState: GameState = {
    cards: [],
    isGameOver: false,
    selectedCards: [],
    startTime: 0,
    endTime: 0,
    totalAttempts: 0
}

const cards = [
    {"id":"8zbL5c3RHDUjr77Fua0E","cardPairID":1,"flipped":false,"revealed":false,"content":"3.png"},
    {"id":"ewrtrttwert34t34tt3t","cardPairID":1,"flipped":false,"revealed":false,"content":"3-1.png"},
    {"id":"rt34t34twret343t34tt","cardPairID":2,"flipped":false,"revealed":false,"content":"4.png"},
    {"id":"t34tnoiin3onino3nio4","cardPairID":2,"flipped":false,"revealed":false,"content":"4-1.png"}
]
describe('GameClass', () => {
    afterEach(cleanup);
    it('should instantiate the game class', () => {
        const game = new Game();
        expect(game.gameState).toEqual(initialState);
    });

    it('should set the cards', () => {
        const game = new Game();
        game.startNewGame(cards);
        expect(game.gameState.cards).toEqual(cards);
    });

    it('should flip the card', () => {
        const game = new Game();
        game.startNewGame(cards);
        game.handleCardClick(game.gameState, cards[0]);
        expect(game.gameState.cards[0].flipped).toEqual(true);
    });

    it('should match the cards', () => {
        const game = new Game();
        game.startNewGame(cards);
        game.handleCardClick(game.gameState, cards[0]);
        game.handleCardClick(game.gameState, cards[1]);
        const isMatch = game.isMatched(game.gameState);
        expect(isMatch).toBeTruthy();
    });

    it('should return gameState with isOverto true', () => {
        const game = new Game();
        cards[0].flipped = true;
        cards[1].flipped = true;
        cards[2].flipped = true;
        cards[3].flipped = true;
        game.startNewGame(cards);
        expect(game.isGameOver()).toBeTruthy();
    });
});