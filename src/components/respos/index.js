import {
	Backdrop,
	CircularProgress,
	Divider,
	Fade,
	Grid,
	makeStyles,
	Modal,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import RepoDetails from "./details";
import Repo from "./repo";

const useStyles = makeStyles({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"& .MuiPaper-root ": {
			overflowY: "auto",
			maxHeight: "100%",
			padding: "20px",
			overflowX: "unset",
			position: "relative",
		},
	},
});

const Repositories = ({
	data = [],
	loading,
	error,
	title = "Trending repos",
	is_favorite,
}) => {
	const classes = useStyles();
	const [selected_repo, setSeletedRepo] = useState(false);
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
				<Repo
					repo={repo}
					is_favorite={is_favorite}
					onSelect={() => setSeletedRepo(repo)}
				/>
			))}
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={!!selected_repo}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				className={classes.modal}
			>
				<Fade in={!!selected_repo}>
					<RepoDetails
						onClose={() => setSeletedRepo(false)}
						repo={selected_repo}
					/>
				</Fade>
			</Modal>
		</Grid>
	);
};

export default Repositories;
