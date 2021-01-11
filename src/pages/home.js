import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navbar";
import Repositories from "../components/respos";
import { setReposAction } from "../store/actions";

const Home = ({ repos = [], setRepos, error }) => {
	useEffect(() => {
		if (repos.length === 0 && !error) {
			setRepos();
		}
	}, [repos, error, setRepos]);

	return (
		<Grid container style={{ paddingTop: "80px" }} justify="center">
			{/* header */}
			<Navbar />
			{/*repos */}
			<Repositories
				data={repos}
				error={error}
				loading={repos.length === 0 && !error}
			/>
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	repos: state.repos,
	error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
	setRepos: () => dispatch(setReposAction()),
});

// connect components to store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
