import React,{useState} from 'react'
import {Grid,InputAdornment, Input,Button} from '@material-ui/core'
import Product from './Product'
import ProductsStyle from '../ProductsStyle'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { alpha } from '@material-ui/core/styles'
import Imagesslider from '../../components/imageslider'
import { Typography } from '@material-ui/core'


const Products = ({products, num ,onAddToCart,setSearchTerm,setSortBy,userDetail}) => {
  console.log("Seeing product list",userDetail,products );

    const classes = ProductsStyle();

   
    return (
       <>
        <Navbar
        userDetail={userDetail}
         num = {num}/>
       
        <main className={classes.content}>
            <div className={classes.toolbar}/>

           <section>            
            <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
        <Carousel.Item>
          <img className="d-block w-100" src={"/assets/2.jpeg"} alt=" slide" />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="default"
              href="#pro"
            >
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={"/assets/3.jpeg"} alt="Second slide" />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="secondary"
              component={Link}
              to="/cart"
            >
              Checkout Cart
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </section>
      
      <div className={classes.searchs}>
        <Input
          className={classes.searchb}
          type="text"
          placeholder="Search..."
          onChange={(event) => {
           
            setSearchTerm(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />   
             <div className={classes.sorting}> 
               <Typography  >
                 
                     <select  onChange={(event)=>{
                       setSortBy(event.target.value);
                     }
                    }>
                        <option value="asc">Price : Low to High </option>
                        <option value="desc">Price : High to Low</option>
                  
                     </select>
                      
                     </Typography>
                     </div>
                    
                  </div>
      <Grid className={classes.content} container justify="center" spacing={5}>
        {products
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro">
              <Product userDetail={userDetail} product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
        </main>
        </>
    )
}

export default Products