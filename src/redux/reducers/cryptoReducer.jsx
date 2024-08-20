const initialState = {
    allCrypto: [],
    favoriteCrypto: [],
    loading: false,
    error: null
};

const cryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_CRYPTO_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_ALL_CRYPTO_SUCCESS':
            return {
                ...state,
                allCrypto: action.payload,
                loading: false
            };
        case 'FETCH_ALL_CRYPTO_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favoriteCrypto: [...state.favoriteCrypto, action.payload]
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favoriteCrypto: state.favoriteCrypto.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default cryptoReducer;
