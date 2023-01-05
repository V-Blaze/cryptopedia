import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { allCountries } from '../../constants';
import filterObjectsById from '../../utils';

const BASE_URL = 'https://api.coincap.io/v2/exchanges';

// Action-types
const GET_ALL_EXCHANGES = 'Exchanges/exchange/GET_ALL_EXCHANGES';

// Reducers
const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_ALL_EXCHANGES}/pending`:
      return state;
    case `${GET_ALL_EXCHANGES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

// Action-Creators
export const fetchExchanges = createAsyncThunk(GET_ALL_EXCHANGES,
  async () => {
    // console.log(allCountries);
    const res = await axios.get(BASE_URL);
    // const data = [];
    const newObj = filterObjectsById(res.data.data, allCountries);

    return newObj;
  });
