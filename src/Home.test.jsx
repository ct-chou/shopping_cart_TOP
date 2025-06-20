import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Components/Home/Home';

describe('Home component', () => {
    it('renders the main header', () => {
        render(
            <MemoryRouter>
                <Home cartAmount={3} />
            </MemoryRouter>
        );
        expect(screen.getByText(/Another Dummy Online Store/i)).toBeInTheDocument();
    });

    it('renders the welcome message', () => {
        render(
            <MemoryRouter>
                <Home cartAmount={0} />
            </MemoryRouter>
        );
        expect(screen.getByText(/Welcome to Our Store/i)).toBeInTheDocument();
        expect(screen.getByText(/Explore our products and add them to your cart!/i)).toBeInTheDocument();
    });

    it('renders the Go to Shop link', () => {
        render(
            <MemoryRouter>
                <Home cartAmount={1} />
            </MemoryRouter>
        );
        const shopLink = screen.getByRole('link', { name: /Go to Shop/i });
        expect(shopLink).toBeInTheDocument();
        expect(shopLink).toHaveAttribute('href', '/shop');
    });

    it('renders the footer', () => {
        render(
            <MemoryRouter>
                <Home cartAmount={2} />
            </MemoryRouter>
        );
        expect(screen.getByText(/© 2025 Shopping Cart. All rights reserved./i)).toBeInTheDocument();
    });
});