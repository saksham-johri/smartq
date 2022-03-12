import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const State = ({ children }) => {
	const [data, setData] = useState({});
	const [cart, setCart] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://smartqdemo.firebaseio.com/events-data.json'
			);

			const parsedResponse = await response.json();

			setData(parsedResponse);
		})();
	}, []);

	const addToCart = item => {
		setCart([...cart, item]);
	};

	const removeFromCart = item => {
		setCart(cart?.filter(({ foodid }) => foodid !== item?.foodid));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<Context.Provider
			value={{
				...data,
				cart,
				addToCart: addToCart,
				removeFromCart: removeFromCart,
				clearCart: clearCart,
			}}>
			{children}
		</Context.Provider>
	);
};

export default State;
