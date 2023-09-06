import { FC } from "react";
import { Card as CardInterface } from "../../interfaces/card.interface";

interface CardProps {
    card: CardInterface;
    index: number;
    handleClick: () => void;
}
export const Card: FC<CardProps> = ({card, handleClick, index}: CardProps) => {
    return (
        <div className="board__card animate__animated animate__zoomIn" onClick={handleClick} role="button" data-testid={`button-${card.id}`}>
            <div className={`card ${card.flipped ? `is-flipped` : ``}`} data-testid={`card-${card.id}`}>
                {
                card.flipped
                    ?
                    <div className="card__front">
                        <img src={`images/${card.content}`} alt={card.id.toString()} className="card__image" />
                    </div> 
                    : 
                    <div className="card__back">
                        <span className="card__number">{index+1}</span>
                        <img src="reverse.svg" alt="Memory" className="card__image reversed" />
                    </div>
                }
            </div>
        </div>
    )
}
