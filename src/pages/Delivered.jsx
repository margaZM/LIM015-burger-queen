import { Fragment } from 'react';
import OrdersList from '../components/OrdersList';
import { Layout } from 'antd';
import Nav from '../components/nav.jsx';

function Delivered() {
    return (
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Nav />
          <Layout style={{ background: "#0e0a17" }}>
            <OrdersList />
          </Layout>
        </Layout>
      </Fragment>
    )
}

export default Delivered
