import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import './style.scss';

const Menu = ({ selectedCategory = {} }) => {
	const { menu = [], addToCart = () => {} } = useContext(Context);

	const [displayedMenu, setDisplayedMenu] = useState([]);

	useEffect(() => {
		if (!menu?.length) return;

		setDisplayedMenu(
			menu?.filter(item => item?.category === selectedCategory?.name)
		);
	}, [menu, selectedCategory]);

	return (
		<div className='menu-container'>
			<div className='banner-container'>
				<img
					className='banner'
					src={selectedCategory?.bannerImage}
					alt={selectedCategory?.name}
				/>
			</div>

			<div>
				{displayedMenu?.map((item, index) => {
					return (
						<div className='menu-item' key={index}>
							<div className='display-details'>
								<div className='image-contaier'>
									<img className='image' src={item?.imageurl} alt='' />
								</div>

								<div className='text'>
									<h2>{item?.foodname}</h2>
									<p>{item?.fooddescription}</p>
								</div>

								<p className='price'>${item?.price}</p>
							</div>

							<div className='button-container'>
								<button
									onClick={() => {
										addToCart(item);
									}}>
									Add to Cart
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
