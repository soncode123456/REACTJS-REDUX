import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/actions/cryptoActions';
import { List, Button, Avatar, Typography, Input } from 'antd';
import { selectFilteredFavorites } from '../redux/selectors/cryptoSelectors';

const { Text } = Typography;

const YourFavorite = () => {
  const dispatch = useDispatch();
  const favoriteCrypto = useSelector(state => state.crypto.favoriteCrypto || []);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFavorites = useSelector(state =>
    selectFilteredFavorites(state, searchTerm)
  );

  const handleRemoveFavorite = (crypto) => {
    dispatch(removeFavorite(crypto));
  };

  return (
    <div>
      <List
        header={<div className='fw-bold fs-3'>Your Favorites</div>}
        bordered
        dataSource={filteredFavorites}
        renderItem={crypto => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={crypto.image} />}
              title={crypto.name}
              description={`USD ${crypto.current_price}`}
            />
            <Button
              type="danger"
              onClick={() => handleRemoveFavorite(crypto)}
            >
              Remove
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default YourFavorite;
