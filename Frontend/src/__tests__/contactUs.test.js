import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactUs from '../components/Contact';

test('renders contact form and information', () => {
  render(
    <MemoryRouter>
        <ContactUs />
    </MemoryRouter>
  );
  const officeAddress = screen.getByText('Office Address');
  const talkToUs = screen.getByText('Talk To Us');
  const leaveMessage = screen.getByText('Leave a Message');
  const nameInput = screen.getByPlaceholderText('Enter your name');
  const emailInput = screen.getByPlaceholderText('Enter your email');
  const messageInput = screen.getByPlaceholderText('Enter your message');
  const sendButton = screen.getByText('Send');

  expect(officeAddress).toBeInTheDocument();
  expect(talkToUs).toBeInTheDocument();
  expect(leaveMessage).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(sendButton).toBeInTheDocument();
});

test('submits form', () => {
  render(
    <MemoryRouter>
        <ContactUs />
    </MemoryRouter>
  );
  const nameInput = screen.getByPlaceholderText('Enter your name');
  const emailInput = screen.getByPlaceholderText('Enter your email');
  const messageInput = screen.getByPlaceholderText('Enter your message');
  const sendButton = screen.getByText('Send');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Test message' } });
  fireEvent.click(sendButton);
});