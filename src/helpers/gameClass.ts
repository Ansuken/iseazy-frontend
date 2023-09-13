import { Card } from "../pages/MemoryBoard/interfaces/card.interface"

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

export class Game {

    public gameState: GameState = initialState;

    public startNewGame = ( cards: Card[] ) => {
        this.gameState = {
            ...this.gameState,
            cards,
            startTime: Date.now()
        }
        return this.gameState;
    }

    private areCardsEqual = ( card1: Card, card2: Card ) => {
        return card1.cardPairID === card2.cardPairID
    }

    public isMatched = () => {
        const isMatched = this.areCardsEqual( this.gameState.selectedCards[0], this.gameState.selectedCards[1] );
        if ( isMatched ) {
            this.gameState = {
                ...this.gameState,
                isGameOver: this.gameState.cards.every((c) => c.flipped),
                selectedCards: [],
                endTime: Date.now(),
                totalAttempts: this.gameState.totalAttempts + 1,
            }
        } else {
            const resetCards = this.gameState.cards.map((c) => {
                if (c.id === this.gameState.selectedCards[1].id || c.id === this.gameState.selectedCards[0].id) {
                    return { ...c, flipped: false };
                }
                return c;
            });
    
            this.gameState = {
                ...this.gameState,
                cards: resetCards,
                selectedCards: [],
                totalAttempts: this.gameState.totalAttempts + 1,
            }
        }

        return this.gameState;
    }

    public handleCardClick = ( card: Card ) => {
        const { selectedCards, cards } = this.gameState;
        if (selectedCards.length > 1) return this.gameState;
        const updateCards = cards.map((c) => {
            if (c.id === card.id) {
                return { ...c, flipped: true };
            }
            return c;
        });
    
        this.gameState = {
            ...this.gameState,
            cards: updateCards,
            selectedCards: [...selectedCards, card],
        }
        return this.gameState;
    }
}