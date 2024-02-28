import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../pages/Header';

test('renders header with links', () => {
  render(
    <MemoryRouter>
        <Header />
    </MemoryRouter>
  );
  const homeLink = screen.getByText('Home');
  const aboutUsLink = screen.getByText('About Us');
  const contactUsLink = screen.getByText('Contact Us');
  expect(homeLink).toBeInTheDocument();
  expect(aboutUsLink).toBeInTheDocument();
  expect(contactUsLink).toBeInTheDocument();
});

test('renders search bar', () => {
  render(
    <MemoryRouter>
        <Header />
    </MemoryRouter>
  );
  const searchBar = screen.getByPlaceholderText('Search');
  expect(searchBar).toBeInTheDocument();
});