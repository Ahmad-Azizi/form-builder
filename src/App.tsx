import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { CreateForm, PreviewForm } from './pages';

const Navigation = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact from={'/'} to={'/create-form'} />
				<Route exact path={'/create-form'} component={CreateForm} />
				<Route exact path={'/preview-form'} component={PreviewForm} />
			</Switch>
		</BrowserRouter>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}

export default App;