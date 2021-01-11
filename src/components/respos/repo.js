import {
	Divider,
	Grid,
	IconButton,
	Paper,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { FavoriteBorder, GitHub, Person } from "@material-ui/icons";
import React from "react";

const Repo = ({ repo }) => {
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
			<Typography variant="h6">
				<GitHub color="primary" style={{ marginBottom: "-5px" }} />
				&nbsp;{repo.full_name}
			</Typography>
			<Tooltip placement="top" arrow title="Bookmark Repository">
				<IconButton size="small">
					<FavoriteBorder />
				</IconButton>
			</Tooltip>
			<Grid item xs={12}>
				<Divider />
			</Grid>
			<Grid item container>
				<Typography>
					<Person color="primary" style={{ marginBottom: "-5px" }} />
					&nbsp;{repo?.owner?.login}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Repo;
