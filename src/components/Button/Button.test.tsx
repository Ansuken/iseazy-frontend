import { render, screen } from '@testing-library/react'
import { Button } from '..';

describe('Button', () => {
    test('should render Button component', () => {
        render(<Button text="Cancel" className="button"/>);
        expect(screen.getByText('Cancel')).toBeDefined()
    })  
});