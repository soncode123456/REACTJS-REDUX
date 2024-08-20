import axios from 'axios';

// Action Types
const FETCH_ALL_CRYPTO_REQUEST = 'FETCH_ALL_CRYPTO_REQUEST';
const FETCH_ALL_CRYPTO_SUCCESS = 'FETCH_ALL_CRYPTO_SUCCESS';
const FETCH_ALL_CRYPTO_FAILURE = 'FETCH_ALL_CRYPTO_FAILURE';

// Action Creators
export const fetchAllCrypto = () => async (dispatch) => {
    dispatch({ type: FETCH_ALL_CRYPTO_REQUEST });
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 50,
                page: 1,
                sparkline: false
            }
        });
        dispatch({ type: FETCH_ALL_CRYPTO_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ALL_CRYPTO_FAILURE, payload: error.message });
    }
};

export const addToFavorite = (crypto) => ({
    type: 'ADD_TO_FAVORITE',
    payload: crypto
});

export const removeFavorite = (crypto) => ({
    type: 'REMOVE_FAVORITE',
    payload: crypto
});
