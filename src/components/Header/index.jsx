import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Context } from '../../context';
import { RouteName } from '../../routes/constants';
import './style.scss';

const Header = () => {
	const { cart = [] } = useContext(Context);

	return (
		<header className='header container2'>
			<Link to={RouteName.home} className='logo-container'>
				<img className='logo' src={logo} alt='' />
			</Link>

			<Link to={RouteName.summary} className='cart-container'>
				<img
					src='https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-cart-grocery-flatart-icons-lineal-color-flatarticons.png'
					alt=''
					height={32}
				/>
				<p>{cart.length}</p>
			</Link>
		</header>
	);
};

export default Header;
