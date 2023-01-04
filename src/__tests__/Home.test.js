import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { Home } from '../pages';
import renderWithProviders from '../redux/Exchanges/exchange-test-utils';

it('snapshots', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('testing the heading inside home component', async () => {
  renderWithProviders(<Home />);

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/CryptoPedia/i)).toBeInTheDocument();
});
