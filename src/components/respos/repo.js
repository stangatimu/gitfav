import {
	Divider,
	Grid,
	IconButton,
	Paper,
	Snackbar,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { FavoriteBorder, GitHub, Person, Visibility } from "@material-ui/icons";
import React, { useState } from "react";
import { addFavoriteRepos } from "../../lib/local-storage";

const Repo = ({ repo, is_favorite, onSelect }) => {
	const [set_favorite_success, setFavoriteSuccess] = useState(false);

	const onSetFavoriteRepo = () => {
		addFavoriteRepos(repo);
		setFavoriteSuccess(true);
	};
	return (
		<Grid
			component={Paper}
			style={{ padding: "10px", margin: "10px" }}
			container
			item
			xs={12}
			md={5}
			justify="space-between"
			elevation={2}
		>
			<Typography style={{ width: "90%" }} noWrap variant="h6">
				<GitHub color="primary" style={{ marginBottom: "-5px" }} />
				&nbsp;{repo.full_name}
			</Typography>
			<Tooltip placement="top" arrow title="Bookmark Repository">
				<IconButton
					color={is_favorite ? "secondary" : ""}
					onClick={is_favorite ? undefined : onSetFavoriteRepo}
					size="small"
				>
					<FavoriteBorder />
				</IconButton>
			</Tooltip>
			<Grid item xs={12}>
				<Divider />
			</Grid>
			<Grid item container justify="space-between">
				<Typography>
					<Person color="primary" style={{ marginBottom: "-5px" }} />
					&nbsp;{repo?.owner?.login}
				</Typography>
				<Tooltip placement="top" arrow title="See details">
					<IconButton onClick={onSelect} size="small">
						<Visibility />
					</IconButton>
				</Tooltip>
			</Grid>
			<Snackbar
				open={set_favorite_success}
				onClose={() => setFavoriteSuccess(false)}
				message={repo.full_name + " has been bookmarked successfully"}
			/>
		</Grid>
	);
};

export default Repo;
