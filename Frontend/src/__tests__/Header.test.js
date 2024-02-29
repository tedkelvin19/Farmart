import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Cookies from 'js-cookie';
import Header from '../pages/Header';

const initialState = { carts: { cartItems: [] } };
const mockStore = configureStore();

const setup = () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  return store;
};

test('shows the correct links when the user is not logged in', () => {
  setup();
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Signup')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.queryByText('Logout')).not.toBeInTheDocument();
});

test('shows the correct links when the user is logged in', () => {
  Cookies.set('access', 'mock_token');
  setup();
  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('Logout')).toBeInTheDocument();
  expect(screen.queryByText('Login')).not.toBeInTheDocument();
  expect(screen.queryByText('Signup')).not.toBeInTheDocument();
  Cookies.remove('access');
});

test('displays the number of cart items', () => {
  const store = mockStore({ carts: { cartItems: ['item1', 'item2', 'item3'] } });
  Cookies.set('access', 'mock_token');
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  expect(screen.getByText('(3)')).toBeInTheDocument();
  Cookies.remove('access');
});

test('does not display cart items when not logged in', () => {
  const store = mockStore({ carts: { cartItems: ['item1', 'item2', 'item3'] } });
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  expect(screen.queryByText('(3)')).not.toBeInTheDocument();
});