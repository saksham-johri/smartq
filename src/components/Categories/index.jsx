import { useContext, useEffect } from 'react';
import { Context } from '../../context';
import './style.scss';

const Categories = ({
	selectedCategory = {},
	setSelectedCategory = () => {},
}) => {
	const { extras: { categories = {} } = {} } = useContext(Context);

	useEffect(() => {
		if (!Object.keys(categories).length) return;

		const firstCategoryName = Object.keys(categories)[0];

		setSelectedCategory({
			name: firstCategoryName,
			...categories[firstCategoryName],
		});
	}, [categories]);

	return (
		<div className='category-container'>
			{Object.keys(categories)?.map((item, index) => {
				const data = {
					name: item,
					...categories[item],
				};

				return (
					<div
						key={index}
						className={`category ${
							JSON.stringify(data) === JSON.stringify(selectedCategory)
								? 'category_selected'
								: ''
						}`}
						onClick={() => {
							setSelectedCategory(data);
						}}>
						<div className='icon-container'>
							<img className='icon' src={data?.icon} alt={data?.name} />
						</div>

						<p className='name'>{data?.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Categories;
