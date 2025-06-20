import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Components/Shop/Shop.jsx';

// Mock fetch API
global.fetch = vi.fn();

// Helper function to setup mocks
function setupFetchMock(data) {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => data,
  });
}

// Mock props
const mockProps = {
  addToCart: vi.fn(),
  cartAmount: 0,
};

// Wrap component with Router for testing
const ShopWithRouter = (props) => (
  <BrowserRouter>
    <Shop {...props} />
  </BrowserRouter>
);

describe('Shop Component', () => {
  it('should render loading state initially', () => {
    setupFetchMock([]);
    render(<ShopWithRouter {...mockProps} />);
    
    expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
  });

  it('should render products after loading', async () => {
    const mockProducts = [
      { id: 1, title: 'Test Product', price: 99.99, description: 'Test description', image: 'test.jpg' },
    ];
    
    setupFetchMock(mockProducts);
    render(<ShopWithRouter {...mockProps} />);
    
    // Wait for product to appear
    const productTitle = await screen.findByText('Test Product');
    expect(productTitle).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('should update quantity when clicking + button', async () => {
    const mockProducts = [
      { id: 1, title: 'Test Product', price: 99.99, description: 'Test description', image: 'test.jpg' },
    ];
    
    setupFetchMock(mockProducts);
    render(<ShopWithRouter {...mockProps} />);
    
    // Wait for product to appear
    await screen.findByText('Test Product');
    
    // Find quantity and increment button
    const quantityDisplay = screen.getByText('1');
    const incrementButton = screen.getByText('+');
    
    // Click increment button
    fireEvent.click(incrementButton);
    
    // Check if quantity was updated
    expect(quantityDisplay.textContent).toBe('2');
  });

  it('should call addToCart with correct quantity when adding to cart', async () => {
    const mockProducts = [
      { id: 1, title: 'Test Product', price: 99.99, description: 'Test description', image: 'test.jpg' },
    ];
    
    setupFetchMock(mockProducts);
    render(<ShopWithRouter {...mockProps} />);
    
    // Wait for product to appear
    await screen.findByText('Test Product');
    
    // Click "Add to Cart" button
    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);
    
    // Check if addToCart was called with correct arguments
    expect(mockProps.addToCart).toHaveBeenCalledWith(1);
  });
});