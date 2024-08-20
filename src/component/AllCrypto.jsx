import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, fetchAllCrypto } from '../redux/actions/cryptoActions';
import { getFilteredCrypto } from '../redux/selectors/cryptoSelectors';
import { Button, List, Avatar, Typography } from 'antd';

const { Text } = Typography;

const AllCrypto = ({ searchTerm }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCrypto());
  }, [dispatch]);

  const { allCrypto, favoriteCrypto, loading, error } = useSelector(state => ({
    allCrypto: state.crypto.allCrypto,
    favoriteCrypto: state.crypto.favoriteCrypto,
    loading: state.crypto.loading,
    error: state.crypto.error
  }));

  // Sử dụng searchTerm để lọc danh sách tiền điện tử
  const filteredCrypto = getFilteredCrypto({ crypto: { allCrypto } }, searchTerm);

  const handleAddToFavorite = (crypto) => {
    dispatch(addToFavorite(crypto));
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : filteredCrypto.length > 0 ? (
        <List
          header={<div className='fw-bold fs-3'>All Cryptocurrencies</div>}
          bordered
          dataSource={filteredCrypto}
          renderItem={crypto => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={crypto.image} />}
                title={crypto.name}
                description={`USD ${crypto.current_price}`}
              />
              <Button
                type="primary"
                onClick={() => handleAddToFavorite(crypto)}
                disabled={favoriteCrypto.some(fav => fav.id === crypto.id)}
              >
                Add to Favorites
              </Button>
            </List.Item>
          )}
        />
      ) : (
        <div>No cryptocurrencies found.</div>
      )}
    </div>
  );
};

export default AllCrypto;
