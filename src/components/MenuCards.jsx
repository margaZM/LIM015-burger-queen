import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../css/MenuCards.css';

const { Meta } = Card;

function MenuCards(props) {
  return (
    <div className='food-card'>
      <Card
      hoverable
      cover={<img alt={props.productName} src={props.photo} />}
      >
        <Meta title={props.productName} description={props.price} />
      </Card>
    </div>
  )
}

export default MenuCards;
