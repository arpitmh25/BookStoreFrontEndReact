import React from 'react';
//import book1 from '../image/book-1.png';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<body>
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
				<div class="header-2">
					<nav class="navbar">
						<li>
							<Link to="/">Home</Link>
						</li>
					</nav>
				</div>
			</header>

			<h1>BOOKS</h1>
			<section className="home" id="home">
				<div class="container">
					<div class="header-2">
						<h3> Book </h3>
						<a class="add-cart cart1" href="#">
							Add Cart
						</a>
						<input type="hidden" value="15" />
					</div>
				</div>
			</section>
		</body>
	);
};
export default Home;
