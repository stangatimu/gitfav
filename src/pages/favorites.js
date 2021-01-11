import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/navbar";
import Repositories from "../components/respos";
import { setFavsAction } from "../store/actions";

const Favorite = ({ repos = [], setRepos, error }) => {
	const [set_favs, setFavs] = useState(false);
	useEffect(() => {
		if (!set_favs) {
			setRepos();
			setFavs(false);
		}
	}, [set_favs, setRepos]);

	return (
		<Grid container style={{ paddingTop: "80px" }} justify="center">
			{/* header */}
			<Navbar />
			{/*repos */}
			<Repositories
				data={repos}
				error={error}
				loading={repos.length === 0 && !error}
				title="Favorite Repositories"
				is_favorite={true}
			/>
		</Grid>
	);
};

const mapStateToProps = (state) => ({
	repos: state.favs,
});

const mapDispatchToProps = (dispatch) => ({
	setRepos: () => dispatch(setFavsAction()),
});

// connect components to store
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
