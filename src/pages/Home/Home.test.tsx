import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { Home } from '..';

describe('Home', () => {
    test('should render Home component', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        expect(screen.getByText('MeMemory')).toBeDefined()
    })  
});