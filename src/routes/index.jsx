import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routesArray } from './_base';

const Header = lazy(() => import('../components/Header'));

const Routes = () => {
	return (
		<>
			<Suspense fallback={() => {}}>
				<Header />
				<Switch>
					{routesArray?.map(({ path, Component, exact = true }, index) => (
						<Route
							key={index}
							path={path}
							component={Component}
							exact={exact}
						/>
					))}
				</Switch>
			</Suspense>
		</>
	);
};

export default Routes;
