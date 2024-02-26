import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import About from '../components/About';

describe('About Component', () => {
  test('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('contains the "About Us" section', () => {
    render(<About />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(
      screen.getByText('We are dedicated to revolutionizing the agricultural industry by empowering farmers to directly sell their farm animals, eliminating the need for middlemen and ensuring fair profits.')
    ).toBeInTheDocument();
  });

  test('contains the "Our Mission" section', () => {
    render(<About />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(
      screen.getByText('Our mission is to eradicate middlemen from the agricultural supply chain, providing a platform for farmers to connect directly with distributors and consumers, and to promote transparency and fairness in the agricultural trade.')
    ).toBeInTheDocument();
  });

  test('contains the "Our Vision" section', () => {
    render(<About />);
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(
      screen.getByText('Our vision is to create a sustainable and equitable agricultural ecosystem where farmers receive the full value for their hard work, and consumers have access to high-quality farm animals directly from the source.')
    ).toBeInTheDocument();
  });

});