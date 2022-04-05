import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = ({ num, userDetail, logoutFunction }) => {
	const emojiIcon = { iconName: 'Emoji2' };
	const classes = useStyles();
	const location = useLocation();

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography variant="h5" className={classes.title} color="inherit">
						<img src="/assets/circles.png" alt="Book Store App" height="50px" className={classes.image} />
						<strong>BooK Store</strong>
					</Typography>

					{userDetail && (
						<strong>
							Welcome {userDetail.firstName} {userDetail.lastName}{' '}
						</strong>
					)}
					<div className={classes.grow} />
					{location.pathname === '/' && (
						<div className={classes.button}>
							<IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
								<Badge badgeContent={num} color="secondary">
									<ShoppingCart />
								</Badge>
							</IconButton>
							<IconButton
								onClick={() => {
									logoutFunction();
								}}
								component={Link}
								to="/"
								color="inherit"
							>
								<Badge  color="secondary">
									⎋
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
