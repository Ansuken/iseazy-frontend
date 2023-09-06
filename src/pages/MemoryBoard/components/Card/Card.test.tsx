import { render, screen } from '@testing-library/react'
import { Card } from '..';

describe('Card', () => {

    const card = {id: 3, cardPairID: 2, flipped: false, content: '4.png', revealed: false};

    test('should render', () => {
        render(<Card card={card} index={1} handleClick={()=>{}}/>);
        expect(screen.getByTestId('card-3')).toBeDefined()
    });
});

