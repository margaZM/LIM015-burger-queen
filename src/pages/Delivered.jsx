import { Fragment, useState, useEffect } from 'react';
import OrdersList from '../components/OrdersList';
import { Layout, Row } from 'antd';
import Nav from '../components/nav.jsx';
import { querySnapshot } from '../firebase/firestore';
import { db } from '../firebase/firebaseConfig';
// import { getDocs } from 'firebase/firestore'

// console.log(filterQuery(db, 'orders', 'status', '==', 'delivered'))


function Delivered() {

  const [delivOrder, setDelivOrder] = useState([]);

  const getDeliveredOrders = async () => {
    const queryOrders = await querySnapshot(db, "orders");
    return queryOrders.docs.map((doc) => (doc.id, " => ", doc.data()))
  }

  useEffect(() => {
    getDeliveredOrders().then((resp) => setDelivOrder(resp))
  }, []);

  // console.log(delivOrder);

    return (
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Nav />
          <Layout style={{ background: "#0e0a17" }}>
            <Row gutter={[16, 8]}>
              {
                delivOrder.map((e) => 
                  e.status === 'delivered' ? (<Fragment>
                    <OrdersList
                      id={e.id}
                      table={e.table}
                      client={e.client}
                      menu={e.order}
                      timeStamp={e.time.toString()}
                      time={''}
                      total={''}
                    />
                  </Fragment>) : null
                )
              }
            </Row>
          </Layout>
        </Layout>
      </Fragment>
    )
}

export default Delivered
