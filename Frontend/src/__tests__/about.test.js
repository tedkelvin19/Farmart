import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../components/About';

// Test to check if the header is rendered on the About page
test('renders header on About page', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const headerElement = screen.getByText('FarmArt');
  expect(headerElement).toBeInTheDocument();
});

// Test to check if the about section content is rendered
test('renders about section content', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const aboutHeaders = screen.getAllByText('About Us');
  expect(aboutHeaders).toHaveLength(2);
  const paragraph = screen.getByText('We are dedicated to revolutionizing the agricultural industry by empowering farmers to directly sell their farm animals, eliminating the need for middlemen and ensuring fair profits.');
  expect(paragraph).toBeInTheDocument();
});

// Test to check if the mission section content is rendered
test('renders mission section content', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const missionHeaders = screen.getAllByText('Our Mission');
  expect(missionHeaders).toHaveLength(1);
  const paragraph = screen.getByText('Our mission is to eradicate middlemen from the agricultural supply chain, providing a platform for farmers to connect directly with distributors and consumers, and to promote transparency and fairness in the agricultural trade.');
  expect(paragraph).toBeInTheDocument();
});

// Test to check if the vision section content is rendered
test('renders vision section content', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const visionHeaders = screen.getAllByText('Our Vision');
  expect(visionHeaders).toHaveLength(1);
  const paragraph = screen.getByText('Our vision is to create a sustainable and equitable agricultural ecosystem where farmers receive the full value for their hard work, and consumers have access to high-quality farm animals directly from the source.');
  expect(paragraph).toBeInTheDocument();
});

// Test to check if the footer is rendered on the About page
test('renders footer on About page', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const footerElement = screen.getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.includes('Farmart | All rights reserved.')
    );
  });
  expect(footerElement).toBeInTheDocument();
});