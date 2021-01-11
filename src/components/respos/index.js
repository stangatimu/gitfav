import { CircularProgress, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import Repo from "./repo";

const Repositories = ({
	data = [],
	loading,
	error,
	title = "Trending repos",
}) => {
	if (loading) {
		<Grid
			container
			item
			style={{ maxWidth: "1000px", paddingTop: "30px" }}
			direction="row"
			spacing={2}
		>
			<CircularProgress size={40} thickness={6} />
		</Grid>;
	}
	return (
		<Grid
			container
			item
			xs={12}
			style={{ maxWidth: "1000px" }}
			direction="row"
			spacing={2}
			justify="space-evenly"
		>
			<Typography variant="h5" style={{ color: "grey" }}>
				<strong>{title}</strong>
			</Typography>
			<Grid item xs={12}>
				<Divider style={{ margin: "10px auto" }} />
			</Grid>
			{data.map((repo) => (
				<Repo repo={repo} />
			))}
		</Grid>
	);
};

export default Repositories;
