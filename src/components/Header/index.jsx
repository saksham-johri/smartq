import logo from '../../assets/logo.png';
import './style.scss';

const Header = () => {
	return (
		<header className='header container'>
			<div className='logo-container'>
				<img className='logo' src={logo} alt='' />
			</div>
		</header>
	);
};

export default Header;
