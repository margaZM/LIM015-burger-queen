import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../css/orderList.css';

function OrdersList(props) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="RESUMEN DEL PEDIDO" bordered={false} key={props.id}>
        <div className="bg-orange">
          <p>Mesa Nro<span>{props.table}</span></p>
        </div>
        <div className="container-div">
          <p>Nombre del cliente:</p>
          <span>{props.client}</span>
        </div>
        <div className="container-div">
          <textarea disabled>{props.order}</textarea>
        </div>
        <div className="container-div">
          <p>Hora de creación:</p>
          <span>{props.timeStamp}</span>
        </div>
        <div className="container-div">
          <p>Tiempo de espera:</p>
          <span>{props.time}</span>
        </div>
        <div className="container-div">
          <p>TOTAL:</p>
          <span>{props.total}</span>
        </div>
      </Card>
    </div>
  )
}

export default OrdersList