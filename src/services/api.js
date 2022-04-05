import axios from 'axios';


class UserService {
    baseUrl = "http://localhost:8080/book";

    getAllBooks(searchTerm, sortOrder) {
        return axios.get(`${this.baseUrl}/getbook?sortOrder=${sortOrder}&searchQuery=${searchTerm}`);
    }

    getAllCart() {
        return axios.get(`${this.baseUrl}/allcartvalues`)
    }

    addtocart(data) {
        return axios.post(`${this.baseUrl}/addInCart`, data)
    }

    remove(cartID) {
        return axios.delete(`${this.baseUrl}/deletecart/${cartID}`)
    }

    updateCartItem(cartID, newQuantity) {
        return axios.put(`${this.baseUrl}/updateQuantity/${cartID}/${newQuantity}`)
    }

    deleteBooks() {
        return axios.delete(`${this.baseUrl}/deleteall`);
    }

    signupDetails(data) {
        return axios.post(`${this.baseUrl}/createuserdetail`, data)
    }

    loginDetails(data) {
        return axios.get(`${this.baseUrl}/userlogin?email=${data.email}&password=${data.password}`)
    }

    placeOrder(data) {
        return axios.post(`${this.baseUrl}/createorder`, data)
    }

    increaseQuantity(cartID) {
        return axios.get(`${this.baseUrl}/increaseQuantity/${cartID}`)
    }

    decreaseQuantity(cartID) {
        return axios.get(`${this.baseUrl}/decreaseQuantity/${cartID}`)
    }
    forgotPassword(data) {
        return axios.post(`${this.baseUrl}/forgotPassword?email=${data.email}&password=${data.password}`)
    }
}
export default new UserService();