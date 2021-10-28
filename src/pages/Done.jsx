import OrdersList from '../components/OrdersList';
import { Layout, Row, Col } from 'antd';
import Nav from '../components/nav.jsx';
import GetSnapshotOrderly from '../helpers/GetSnapshotOrderly';

const { Header } = Layout; 

const Done = () => {

  const orderedCollection = GetSnapshotOrderly('orders', 'time', 'asc')
  const orders = []
  orderedCollection.forEach(doc => doc.status === 'done'? orders.push(doc) : null)

  const items = orders.length > 0 && orders.map((orderClient) => {
    return (<OrdersList
      key={orderClient.id}
      orderClient={orderClient}
    />)
  })

  return (
    <>
      <Layout style={{ minHeight: "100vh", background: "#585858" }}>
        <Nav />
        <Layout style={{ background: "#0e0a17" }}>
          <Header style={{ background: "#0e0a17" }} > </Header>
          <Row gutter={[0, 8]}>
            <Col xs={20} className="container-title">
              <h1 className='title-view'>PEDIDOS LISTOS</h1>
              <hr className='divider-line' />
            </Col>
          </Row>
          <Row gutter={[0, 8]}>
            {items}
          </Row>
        </Layout>
      </Layout>
    </>
  )
}

export default Done
