import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Favorite from "../pages/favorites";
import Home from "../pages/home";

const Routes = () => {
	return (
		<Fragment>
			<Route path="/" exact component={() => <Home />} />
			<Route path="/favorites" component={() => <Favorite />} />
		</Fragment>
	);
};

export default Routes;
