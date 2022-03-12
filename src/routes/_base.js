import { lazy } from 'react';
import { RouteName } from './constants';

const Home = lazy(() => import('../pages/Home'));

export const routesArray = [
	{
		path: RouteName.home,
		Component: Home,
	},
];
