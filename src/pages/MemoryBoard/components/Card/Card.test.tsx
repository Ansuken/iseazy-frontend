import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Card } from '..';

const card = {id: '3', cardPairID: 2, flipped: false, content: '4.png', revealed: false};

describe('Card', () => {

    afterEach(cleanup);
    it('should render', () => {
        render(<Card card={card} index={1} handleClick={()=>{}}/>);
        expect(screen.getByTestId('card-3')).toBeDefined()
    });

    it('should render the reverse card image', () => {
        render(<Card card={card} index={1} handleClick={()=>{}}/>);
        expect(screen.getByAltText('MeMemory')).toBeDefined()
    });

    it('should render the card image', () => {
        card.flipped = true;
        render(<Card card={card} index={1} handleClick={()=>{}}/>);
        expect(screen.getByAltText('3')).toBeDefined()
    });

    it('should flipp the card when is clicked', () => {
        render(<Card card={card} index={1} handleClick={()=>{card.flipped = true;}}/>);
        const cardItem = screen.getByRole('button');
        fireEvent.click(cardItem);
        expect(screen.getByAltText('3')).toBeDefined();
    });
});

