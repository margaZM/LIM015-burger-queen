import 'antd/dist/antd.css';
import '../css/MenuCards.css';
import { Card } from 'antd';

const { Meta } = Card;

function MenuCards(props) {

  return (
    <div className='food-cards' >
      <Card
        hoverable
        className='card-menu'
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
    </div>
  )
}

export default MenuCards;
