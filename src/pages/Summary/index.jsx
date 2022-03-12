import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import { RouteName } from '../../routes/constants';
import './style.scss';

const Summary = () => {
	const {
		cart = [],
		removeFromCart = () => {},
		clearCart = () => {},
	} = useContext(Context);

	return (
		<div className='summary-container-page'>
			<h3>Cart Summary</h3>

			{cart?.length ? (
				<img
					className='bin'
					src='https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-bin-mobile-user-interface-tulpahn-outline-color-tulpahn.png'
					alt=''
					height={24}
					onClick={clearCart}
				/>
			) : null}

			<div className={`inner-container ${cart?.length === 0 ? 'empty' : null}`}>
				{cart?.length ? (
					cart?.map((item, index) => {
						return (
							<div key={index} className='cart-item'>
								<img
									className='close'
									src='https://img.icons8.com/bubbles/50/000000/delete-sign.png'
									alt='x'
									height={24}
									onClick={() => removeFromCart(item)}
								/>

								<p>{item?.foodname}</p>

								<p>{`$ ${item?.price}`}</p>
							</div>
						);
					})
				) : (
					<p className='empty-text'>Your cart is empty</p>
				)}
			</div>

			{cart?.length ? (
				<Link to={RouteName.payment} className='btn-container'>
					<button>Proceed</button>
				</Link>
			) : null}
		</div>
	);
};

export default Summary;
