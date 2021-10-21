import { Fragment, useState, useEffect } from 'react';
import OrdersList from '../components/OrdersList';
import { Layout, Row, Col } from 'antd';
import Nav from '../components/nav.jsx';
import { querySnapshot } from '../firebase/firestore';
import { db } from '../firebase/firebaseConfig';

function Delivered() {

  const [delivOrder, setDelivOrder] = useState([]);

  const getDeliveredOrders = async () => {
    const queryOrders = await querySnapshot(db, "orders");
    return queryOrders.docs.map((doc) => ({ id: doc.id, docdata: doc.data()}))
  }

  useEffect(() => {
    getDeliveredOrders().then((resp) => setDelivOrder(resp))
  }, []);

  

    return (
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Nav />
          <Layout style={{ background: "#0e0a17" }}>
            <p>DESPACHADOS</p>
            <hr />
            <Row gutter={[16, 8]}>
              {
                delivOrder.map(e => e.docdata.status === 'delivered' ? (<Fragment>
                  <Col xl={6} md={10} sm={12} xs={24} >
                      <OrdersList
                        id={e.id}
                        table={e.docdata.table}
                        client={e.docdata.client}
                        // menu={e.docdata.order}
                        timeStamp={e.docdata.time.toDate().toLocaleString()}
                        time={new Date().toLocaleString()}
                        total={''}
                      />
                  </Col>
                </Fragment>) : null)
              }
            </Row>
          </Layout>
        </Layout>
      </Fragment>
    )
}

export default Delivered
