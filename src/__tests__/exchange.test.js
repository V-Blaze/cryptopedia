import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reducer, { fetchExchanges } from '../redux/Exchanges/exchange';

// Testing the reducers
test('should return the initial state', () => {
  expect(reducer()).toEqual([]);
});

test('should handle an array of exchanges added tothe state', () => {
  const previousState = [];
  const action = { type: 'Exchanges/exchange/GET_ALL_EXCHANGES/fulfilled', payload: [{ id: 1, name: 'Binance', country: 'china' }] };

  expect(reducer(previousState, action)).toEqual([
    { id: 1, name: 'Binance', country: 'china' },
  ]);
});

// Testing the action creators.
describe('shoud dispatch get all exchanges action', () => {
  it('should pass', async () => {
    const BASE_URL = 'https://api.coincap.io/v2/exchanges';
    const exchanges = { data: { data: [{ exchangeId: 'binance', name: 'Binance', country: 'china' }] } };

    const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(exchanges);
    const store = configureStore({
      reducer(state = [], action) {
        switch (action.type) {
          case 'Exchanges/exchange/GET_ALL_EXCHANGES/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchExchanges());
    expect(postSpy).toBeCalledWith(BASE_URL);
    const state = store.getState();
    expect(state).toEqual([{ exchangeId: 'binance', name: 'Binance', country: 'china' }]);
  });
});
