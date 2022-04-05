import React from 'react';
import './Homepage.css';
//import book1 from '../image/book-5.png';
import { Link } from 'react-router-dom';
import Products from '../Products/Product/Products';

const Homepage = () => {
	return (
		<header class="header">
			<div class="header-1">
				<a href="#" class="logo">
					<i class="fas fa-book" />
					Bookstore
				</a>
				<form action="" class="search-form">
					<input type="search" name="" placeholder="search here..." id="search-box" />
					<label for="search-box" class="fas fa-search" />
				</form>
				<div class="icons">
					<div id="search-btn" class="fas fa-search" />
					<i class="fas fa-search" />
					<a href="#" class="fas fa-heart" />
					<a href="#" class="fas fa-shopping-cart" />
					<div id="login-btn" class="fas fa-user" />
				</div>
			</div>

			<Products />
		</header>
	);
};
export default Homepage;
