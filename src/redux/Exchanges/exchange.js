// Action-types
const GET_ALL_EXCHANGES = 'Exchanges/exchange/GET_ALL_EXCHANGES';

// Reducers
const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_EXCHANGES:
      return state;

    default:
      return state;
  }
}

// Action-Creators
