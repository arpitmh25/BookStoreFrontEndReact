import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, CardActionArea } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Product = ({ product, onAddToCart ,userDetail}) => {
	console.log("USer Details.....",userDetail);
	
	
	const [ cart, setCart ] = useState(product);
	const addInCart = (product) => {
		setCart({
			...cart,
			bookName:product.bookName,
			author: product.author,
			quantity: 1,
			image: product.image,
			price: product.price
		});
	};

	const check = (product) => {
		addInCart(product);
		console.log(cart);
	};
	const classes = useStyles();
	return (
		<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={product.image} title={product.bookName} author={product.author}/>
				</CardActionArea>
			<CardContent>
				<div  className={classes.cardContent}>
					<Typography variant="h6" style={{fontWeight:'bold'}} >{product.bookName}</Typography>
					<Typography variant="h6" color="secondary">
						₹<b>{product.price}</b>
					</Typography>
				</div>
				<div className={classes.cardContent1}>
					<Typography variant="h6">by author : {product.author}</Typography>
				</div>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<Button
					variant="contained"
					className={classes.button}
					endIcon={<AddShoppingCart />}
					onClick={() => onAddToCart
						({...cart,quantity: 1,userID:userDetail.userID})}
				>
					<b>ADD TO CART</b>
				</Button>
			</CardActions>
		</Card>
	);
};

export default Product;
