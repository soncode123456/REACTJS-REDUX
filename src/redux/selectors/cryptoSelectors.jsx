import { createSelector } from 'reselect';

// Input selector
const selectAllCrypto = (state) => state.crypto.allCrypto;
const selectFavoriteCrypto = (state) => state.crypto.favoriteCrypto || [];

// Memoized selector for all crypto
export const getFilteredCrypto = createSelector(
  [selectAllCrypto, (state, searchTerm) => searchTerm],
  (allCrypto, searchTerm) => {
    return Array.isArray(allCrypto)
      ? allCrypto.filter((crypto) =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
  }
);

// Memoized selector for filtered favorites
export const selectFilteredFavorites = createSelector(
  [selectFavoriteCrypto, (state, searchTerm) => searchTerm],
  (favoriteCrypto, searchTerm) => {
    return Array.isArray(favoriteCrypto)
      ? favoriteCrypto.filter((crypto) =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];
  }
);
