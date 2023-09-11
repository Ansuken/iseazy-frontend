export interface Card {
    id: string;
    content: string;
    cardPairID: number;
    flipped: boolean;
    revealed?: boolean;
}