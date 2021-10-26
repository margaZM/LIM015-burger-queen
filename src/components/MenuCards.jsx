import 'antd/dist/antd.css';
import '../css/MenuCards.css';
import { Card } from 'antd';
import { Modal, Select } from 'antd'
import { useState } from 'react';

const { Meta } = Card;
const { Option } = Select;

const MenuCards = ({handleAddProduct, ...props}) => {
  const id = props.product.id;
  const { name, photo, price, category } = props.product.docdata
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [typesArray, setTypesArray] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  const showModal = (product) => {
    setIsModalVisible(true);
    const { type } = product.docdata;
    setTypesArray(type); //Renderizar el select de acuerdo a su tipo 
  };

  const handleOk = (product) => {
    handleAddProduct({...product, type: selectedType})
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function handleChange(value) {
    setSelectedType(value)
  }

  return (
    <>
    <button className="unstyled-button">
      <Card
        hoverable
        key={id}
        className='card-menu'
        onClick={
        category !== 'breakfast' && category !== 'additional'  ? 
        () => showModal(props.product): 
        () => handleAddProduct(props.product)
        }
        cover={
          <img
            alt={name}
            src={photo}
          />
        }
        >
        <Meta
          title={name}
          description={'s/' + price}
        />
      </Card>
    </button>
    <Modal 
      visible={isModalVisible} 
      onOk={() => handleOk(props.product)} 
      onCancel={handleCancel}
    >
      <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center' }}>
          <img alt={name}  src={photo} style={{ width: 250, height: 200 }} />

          <Select
          onChange={handleChange} 
          defaultValue="Seleccione una opción"  
          style={{ width: 300 }} 
          allowClear 
          required>
            {
              typesArray.map(type=> <Option value={type} key={type}> {type} </Option>)
            }
          </Select> 
      </div>
    </Modal>
  </>
  )
}

export default MenuCards;
