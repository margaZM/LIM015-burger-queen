import { render, screen } from '@testing-library/react';
// import App from './App';
import Error404 from './pages/Error404';
import Logo from './pages/Delivered';
import ProductList from './pages/Delivered';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('<Error404 />', () => {
  it('renders three <Error404 /> components', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.contains(<p className="text-error">Oops! Lo sentimos pero no se encontro lo que buscabas</p>)).toEqual(true);
  });
});

describe('<Logo />', () => {
  it('renders three <Logo /> components', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.exists()).toBeTruthy()
  });
});

describe('<ProductList />', () => {
  it('renders three <ProductList /> components', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.exists()).toBeTruthy()
  });
});

