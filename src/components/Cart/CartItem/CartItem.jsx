import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item , onRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity,book}) => {
  const classes = useStyles();
  console.log("Checking items", item);
  console.log("Checking bokssssssssssssssssssssss", book);


 return (
    <Card className="cart-item">
      <CardMedia image={item.book.image}  alt={item.book.bookName} className={classes.media} />
      <CardContent className={classes.cardContent}>
      <Typography variant="h6"style={{fontWeight:'bold'}} >{item.book.bookName}</Typography>
        {/* <Typography variant="h6">{item.book.author}</Typography> */}
        <Typography variant="h6"  color='secondary' >₹{item.book.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button disabled={item.quantity===1} type="button" size="small" onClick={() =>{
           handleDecreaseQuantity(item.cartID)
           } }>-</Button>
           
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button disabled={item.book.quantity===book.quantity} type="button" size="small" onClick={() =>{
           handleIncreaseQuantity(item.cartID)

           } } >+</Button>
        </div>
        <Button className={classes.button} variant="contained" type="button" color='secondary' onClick={() => onRemoveFromCart(item.cartID)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;