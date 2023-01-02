import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from './Exchanges/exchange';

const store = configureStore({
  reducer: {
    exchanges: exchangeReducer,
  },
});

export default store;
