import 'antd/dist/antd.css';
import '../css/MenuCards.css';
import { Card } from 'antd';

const { Meta } = Card;

function MenuCards({selectedProduct, ...props}) {

  return (
    <button className="unstyled-button">
      <Card
        hoverable
        key={props.reference}
        className='card-menu'
        onClick={() => selectedProduct(props.product)}
        cover={
          <img
            alt={props.name}
            src={props.photo}
          />
        }
        >
        <Meta
          title={props.name}
          description={'s/' + props.price}
        />
      </Card>
    </button>
  )
}

export default MenuCards;
