import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Col, Row, Layout, Typography, Input } from 'antd';
import AllCrypto from './component/AllCrypto';
import YourFavorite from './component/YourFavorite';
import ErrorBoundary from './Error/ErrorBoundary';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Provider store={store}>
      <Layout>
        <Header style={{ backgroundColor: '#fff', padding: '10px 0' }}>
          <div className="d-flex justify-content-between align-items-center" style={{ padding: '0 20px' }}>
            <Title className='fw-bold fs-2' level={2} style={{ margin: 0 }}>Crypto Portfolio</Title>
            <Input
              placeholder="Search Cryptocurrencies"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: '300px' }} // Đặt chiều rộng cho thanh tìm kiếm
            />
          </div>
        </Header>
        <Content style={{ padding: '20px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <ErrorBoundary>
                <AllCrypto searchTerm={searchTerm} />
              </ErrorBoundary>
            </Col>
            <Col span={12}>
              <ErrorBoundary>
                <YourFavorite searchTerm={searchTerm} />
              </ErrorBoundary>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
