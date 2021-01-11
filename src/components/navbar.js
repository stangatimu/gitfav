import {
	AppBar,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar style={{ backgroundColor: "white" }} position="fixed">
			<Toolbar>
				<Grid container justify="space-between">
					<Typography color="primary" variant="h4">
						<strong>GitFav</strong>
					</Typography>
					{/* app menu */}
					<IconButton
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<Link
							color="primary"
							style={{ textDecoration: "none" }}
							to="/"
						>
							<MenuItem onClick={handleClose}>Home</MenuItem>
						</Link>
						<Link
							color="primary"
							style={{ textDecoration: "none" }}
							to="/favorites"
						>
							<MenuItem color="primary" onClick={handleClose}>
								Favorite
							</MenuItem>
						</Link>
					</Menu>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
