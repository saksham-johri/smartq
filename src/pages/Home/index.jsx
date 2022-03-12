import { useState } from 'react';
import Categories from '../../components/Categories';
import Menu from '../../components/Menu';
import Summary from '../../components/Summary';
import './style.scss';

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState({});

	return (
		<div className='home container'>
			<h1 className='title'>Build Your Menu</h1>

			<div style={{ display: 'flex' }}>
				<Categories
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>

				<Menu selectedCategory={selectedCategory} />

				<Summary />
			</div>
		</div>
	);
};

export default Home;
