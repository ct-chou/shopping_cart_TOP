import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav.jsx';

// Wrap component with Router for testing
const NavWithRouter = (props) => (
  <BrowserRouter>
    <Nav {...props} />
  </BrowserRouter>
);

describe('Nav Component', () => {
  it('should render navigation links', () => {
    render(<NavWithRouter cartAmount={0} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('should not display cart badge when cart is empty', () => {
    render(<NavWithRouter cartAmount={0} />);
    
    // No badge should be present for zero items
    const cartBadge = screen.queryByText('0');
    expect(cartBadge).not.toBeInTheDocument();
  });

  it('should display cart badge with correct count', () => {
    render(<NavWithRouter cartAmount={5} />);
    
    // Badge should show the correct number
    const cartBadge = screen.getByText('5');
    expect(cartBadge).toBeInTheDocument();
  });
});