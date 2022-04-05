import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Signup from './components/signup/signup';
//import Homepage from './components/Homepage';
import Home from './components/Home';
import Products from './Products/Product/Products';
import api from './services/api';
import Navbar from './components/Navbar/Navbar';
import AddressForm from './components/CheckoutForm/AddressForm';
import Checkout from './components/CheckoutForm/Checkout';
import Review from './components/CheckoutForm/Review';
import Imageslider from './components/imageslider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/login';
import ForgotPassword from './login/forgotPassword';


function App() {
	const [ products, setProducts ] = useState([]);
	const [ cart, setCart ] = useState([]);
	const [ addCart, addInCart ] = useState([]);
	const [ isLogin, setIsLogin ] = useState(false);
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ sortBy, setSortBy ] = useState('asc');
	const [ userDetails, setUserDetails ] = useState();
	

	console.log('User data', userDetails);

	const handleUserLogin = () => {
		setIsLogin(true);
		
	};

	const fetchProducts = async (searchTerm, sortBy) => {
		const { data } = await api.getAllBooks(searchTerm, sortBy);
		setProducts(data.data);
	};

	const handleRemoveFromCart = async (cartID) => {
		const response = await api.remove(cartID);
		await fetchCart();
	};
	const fetchCart = async () => {
		const { data } = await api.getAllCart();
		setCart(data.data);
	};

	useEffect(
		() => {
			fetchProducts(searchTerm, sortBy);
		},
		[ searchTerm, sortBy ]
	);

	useEffect(() => {
		fetchCart();
	}, []);

	const handleAddToCart = async (data) => {
		console.log('Data printing', data);

		const item1 = cart.find(
			(item) =>
				item.cartID == data.cartID &&
				item.userID == data.userID &&
				item.bookID == data.bookID &&
				item.quantity == data.quantity
		);
		if (item1) {
			const currrentQuantity = parseInt(item1.quantity);
			await api.updateCartItem(item1.cartID, currrentQuantity + 1);
		} else {
			await api.addtocart(data);
		}
		await fetchCart();
	};

	const handleUpdateQuantity = async (cartID, newQuantity) => {
		console.log('New quanttity', newQuantity);
		await api.updateCartItem(cartID, newQuantity);
		await fetchCart();
	};

	const handleDeleteAllFromCart = async () => {
		await api.deleteBooks();
		await fetchCart();
	};

	const handleOrder = async (address) => {
		const data = {
			userID: userDetails.userID,
			address: address
		};
		await api.placeOrder(data);
		await fetchCart();
	};

	const handleIncreaseQuantity = async (cartID) => {
		await api.increaseQuantity(cartID);
		await fetchCart();
	};
	const handleDecreaseQuantity = async (cartID) => {
		await api.decreaseQuantity(cartID);
		await fetchCart();
	};
	const logoutFunction = async() => {
		setIsLogin(false);
		setUserDetails(undefined);
	}
	//console.log(cart)
	console.log(products);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={
							isLogin ? (
								<Products
									products={products}
									setSearchTerm={setSearchTerm}
									setSortBy={setSortBy}
									num={cart.length}
									onAddToCart={handleAddToCart}
									userDetail={userDetails}
								/>
							) : (
								<Login handleUserLogin={handleUserLogin} setUserDetails={setUserDetails} />
							)
						}
					/>
					<Route exact path="/signup" element={<Signup />} />

					<Route exact path="/home" element={<Products	products={products}
									setSearchTerm={setSearchTerm}
									setSortBy={setSortBy}
									num={cart.length}
									onAddToCart={handleAddToCart}
									userDetail={userDetails}/>} />

					{isLogin && (
						<Route
							exact
							path="/cart"
							element={
								<Cart
									cart={cart}
									handleRemoveFromCart={handleRemoveFromCart}
									handleDecreaseQuantity={handleDecreaseQuantity}
									handleIncreaseQuantity={handleIncreaseQuantity}
									handleDeleteAllFromCart={handleDeleteAllFromCart}
									products={products}
								/>
							}
						/>
					)}
					{isLogin && <Route exact path="/checkout" element={<Checkout userDetails={userDetails} logoutFunction={logoutFunction} handleOrder={handleOrder} />} />}
					{isLogin && <Route exact path="/review" element={<Review />} />}
					{isLogin && <Route exact path="/check" element={<Imageslider />} />}
					<Route exact path="/forgotpassword" element={<ForgotPassword />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
