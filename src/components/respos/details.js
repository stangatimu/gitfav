import {
	Divider,
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@material-ui/core";
import {
	BugReport,
	Close,
	Person,
	StarBorder,
	Visibility,
} from "@material-ui/icons";
import React from "react";

const RepoDetails = ({ repo, onClose }) => {
	return (
		<Paper
			style={{
				maxWidth: "100%",
				width: "600px",
				position: "relative",
				margin: "auto",
			}}
		>
			<IconButton
				onClick={onClose}
				size="small"
				style={{ position: "absolute", right: "0px", top: "0px" }}
			>
				<Close />
			</IconButton>
			<Typography variant="h6" color="primary">
				{repo?.full_name}
			</Typography>
			<Divider style={{ margin: "5px auto" }} />
			<Grid item container justify="space-between">
				<Typography>
					<Person color="primary" style={{ marginBottom: "-5px" }} />
					&nbsp;{repo?.owner?.login}
				</Typography>
				<Typography>
					<StarBorder
						color="primary"
						style={{ marginBottom: "-5px" }}
					/>
					&nbsp;{repo.stargazers_count}
				</Typography>
				<Typography>
					<Visibility
						color="primary"
						style={{ marginBottom: "-5px" }}
					/>
					&nbsp;{repo.watchers}
				</Typography>
				<Typography>
					<BugReport
						color="primary"
						style={{ marginBottom: "-5px" }}
					/>
					&nbsp;{repo.open_issues}
				</Typography>
			</Grid>
			<Divider style={{ margin: "5px auto" }} />
			<Typography>{repo.description}</Typography>
		</Paper>
	);
};

export default RepoDetails;
