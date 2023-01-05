import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import { Details } from '../pages';
import renderWithProviders from '../redux/Exchanges/exchange-test-utils';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useLocation: () => ({
    pathname: '/details',
    state: { name: 'Binance' },
  }),
}));

it('snapshots', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('testing the heading inside home component', async () => {
  renderWithProviders(
    <BrowserRouter>
      <Details />
    </BrowserRouter>,
  );

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/Exchange Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Binance/i)).toBeInTheDocument();
});
