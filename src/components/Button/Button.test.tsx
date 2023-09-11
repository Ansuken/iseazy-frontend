import { cleanup, render, screen } from '@testing-library/react'
import { Button } from '..';

describe('Button', () => {
    afterEach(cleanup);
    it('should render Button component', () => {
        render(<Button text="Cancel" className="button"/>);
        expect(screen.getByText('Cancel')).toBeDefined()
    })  
});