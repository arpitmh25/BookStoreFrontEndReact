import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const paperStyle = {backgroundColor: '#F0F8FF', padding: 20, width: 350, margin: '0 auto' };
	const headerStyle = { margin: 0 };
	const avatarStyle = { backgroundColor: '#1bbd7e' };
	const marginTop = { marginTop: 5 };
	const [ details, setDetails ] = useState({ firstName: '',lastName:'', email: '', address: '', password: '' });
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const navigate = useNavigate();
	console.log('Hello there', details);

	const handleSignup = async (data) => {
		await api.signupDetails(data).then(() => {
			navigate('/');
		});
	};

	return (
		<Grid>
			<Paper style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<AddCircleOutlineOutlinedIcon />
					</Avatar>
					<h2 style={headerStyle}>Sign Up</h2>
					<Typography variant="caption" gutterBottom>
						Please fill this form to create an account !
					</Typography>
				</Grid>
				<TextField
					onChange={(e) => {
						setDetails({ ...details, firstName: e.target.value });
					}}
					fullWidth
					label="FirstName"
					name="firstName"
					placeholder="Enter your first name"
				/>
				<TextField
					onChange={(e) => {
						setDetails({ ...details, lastName: e.target.value });
					}}
					fullWidth
					label="LastName"
					name="lastName"
					placeholder="Enter your last name"
				/>
				<TextField
					onChange={(e) => {
						setDetails({ ...details, email: e.target.value });
					}}
					fullWidth
					label="Email"
					name="email"
					placeholder="Enter your email"
				/>

				<TextField
					onChange={(e) => {
						setDetails({ ...details, address: e.target.value });
					}}
					fullWidth
					label="Address"
					name="address"
					placeholder="Enter your phone number"
				/>
				<TextField
					onChange={(e) => {
						setDetails({ ...details, password: e.target.value });
					}}
					fullWidth
					label="Password"
					name="password"
					placeholder="Enter your password"
				/>
				<TextField
					onChange={(e) => {
						setConfirmPassword(e.target.value);
					}}
					fullWidth
					label="Confirm Password"
					name="confirm password"
					placeholder="Confirm your password"
				/>
				<FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." />

				<Button
					type="submit"
					onClick={() => {
						handleSignup(details);
					}}
					variant="contained"
					color="primary"
				>
					Sign up
				</Button>
			</Paper>
		</Grid>
	);
};

export default Signup;
