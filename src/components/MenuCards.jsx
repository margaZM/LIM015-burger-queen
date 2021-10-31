import 'antd/dist/antd.css';
import '../css/MenuCards.css';
import { Card } from 'antd';
import { Modal, Select } from 'antd'
import { useState, useEffect } from 'react';

const { Meta } = Card;
const { Option } = Select;

const MenuCards = ({handleAddProduct, ...props}) => {
  const id = props.product.id;
  const dataProducts = props.onlyLunchs; //Array de las categorías en almuerzos
  const { name, photo, price, category } = props.product.docdata
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productsOptionsSelect, setProductsOptionsSelect] = useState([]);//Para renderizar el select con el tipo de productos
  const [selectedProduct, setSelectedProduct] = useState([]); //Producto seleccionado en el select
 
  const ShowModal = (product) => {
    setIsModalVisible(true);
    const dataOfSubcategory = dataProducts.filter(item => item.docdata.subcategory === product.docdata.subcategory)
    setProductsOptionsSelect([...dataOfSubcategory ])
  };
  
  useEffect(() => {
    setProductsOptionsSelect(productsOptionsSelect => [...productsOptionsSelect]) //Actualiza el valor seleccionado en el select
  }, []);

  const handleOk = () => {
    handleAddProduct({...selectedProduct, type: selectedProduct.docdata.type}) //Envia el objeto al resumen de pedido
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (value) => {
    const productToObj = JSON.parse(value); //Convierte de string a objeto
    setSelectedProduct(productToObj) //Lee el valor seleccionado en select
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
        () => ShowModal(props.product): 
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
          description={category !== 'breakfast' && category !== 'additional'?  ''  : 's/' + price }
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
              productsOptionsSelect.map(item => 
              <Option value={JSON.stringify(item)} key={item.id}> 
              {item.docdata.name} {item.docdata.type} {`s/` + item.docdata.price}
              </Option>
              )
            }
          </Select> 
      </div>
    </Modal>
  </>
  )
}

export default MenuCards;
