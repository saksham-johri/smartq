import { lazy } from 'react';
import { RouteName } from './constants';

const Home = lazy(() => import('../pages/Home'));
const Summary = lazy(() => import('../pages/Summary'));
const Payment = lazy(() => import('../pages/Payment'));

export const routesArray = [
	{
		path: RouteName.home,
		Component: Home,
	},
	{
		path: RouteName.summary,
		Component: Summary,
	},
	{
		path: RouteName.payment,
		Component: Payment,
	},
];
