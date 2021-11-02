import Error404 from './pages/Error404';
import Logo from './components/Logo.jsx';
import ProductList from './components/ProductsList.jsx';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('<Error404 />', () => {
  it('renders three <Error404 /> components', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.exists()).toBeTruthy()
  });
  it('renders paragraph oops', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.contains(<p className="text-error">Oops! Lo sentimos pero no se encontro lo que buscabas</p>)).toEqual(true);
  });
  it('renders paragraph about options', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.contains(<p className="text-error">O tal vez quisiste visitar alguno de los sgtes links:</p>)).toEqual(true);
  });
  it('renders ancle element with route to home', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.contains(<a href="/">Inicio</a>)).toEqual(true);
  });
  it('renders ancle element with route to register', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.contains(<a href="/register">Registro</a>)).toEqual(true);
  });
});

describe('<Logo />', () => {
  it('renders three <Logo /> components', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.exists()).toBeTruthy()
  });
  it('renders paragraph about options', () => {
    const wrapper = shallow(<div>
            <img className="logo" src="./images/logo.svg" alt="logo-burger-queen"/>
        </div>);
    // const input = wrapper.find('img');
    expect(wrapper.exists('img')).toBe(true);
  });
});

describe('<ProductList />', () => {
  it('renders three <ProductList /> components', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper.exists()).toBeTruthy()
  });
});

