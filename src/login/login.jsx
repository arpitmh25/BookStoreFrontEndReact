import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import api from '../services/api';


const Login = ({ handleUserLogin, setUserDetails }) => {
	
	const paperStyle = {  backgroundColor: '#F0F8FF', padding: 10, height: '63vh', width: 350, margin: '0 auto' };
	const avatarStyle = { backgroundColor: '#1bbd7e' };
	const btnstyle = { margin: '8px 0' };
	const [ userLogin, setUserLogin ] = useState({ email: '', password: '' });
	const handleLogin = async (data) => {
		await api.loginDetails(data).then((response) => {
			handleUserLogin();
			setUserDetails(response.data);
			alert("Successfully")
		});
	};
	return (
		<Grid >
			<Paper style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<LockOutlinedIcon />
					</Avatar>
					<h2>Sign In</h2>
				</Grid>
				<TextField
					onChange={(e) => {
						setUserLogin({ ...userLogin, email: e.target.value });
					}}
					label="Username"
					placeholder="Enter username"
					fullWidth
					required
				/>
				<TextField
					onChange={(e) => {
						setUserLogin({ ...userLogin, password: e.target.value });
					}}
					label="Password"
					placeholder="Enter password"
					type="password"
					fullWidth
					required
				/>
				<FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Remember me" />
				<Button
					type="submit"
					onClick={() => handleLogin({ ...userLogin })}
					color="primary"
					variant="contained"
					style={btnstyle}
					fullWidth
				>
					Sign in
				</Button>
				<Typography />
				<Typography>
					{' '}
					Do you have an account ?
					<Link href="/signup">Sign Up</Link>
				</Typography>
				<Typography>
					{' '}
					Reset Password ?
					<Link href="/forgotpassword">Forgot Password</Link>
				</Typography>
			</Paper>
		</Grid>
	);
};

export default Login;
