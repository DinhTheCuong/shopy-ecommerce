import { useState, createContext } from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './components/pages/home';
import Header from './components/header';
import Services from './components/services';
import Footer from './components/footer';
import Sidebar from '../src/components/sidebar';
import { data } from './data.js';
import { ToastContainer, toast } from 'react-toastify';
import AllProducts from './components/pages/all-products';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Cart from './components/pages/cart';
import Checkout from './components/pages/checkout';
import LoginPage from './components/pages/login';
import Register from './components/pages/register';
import ProductDetail from './components/pages/product-detail';
import ScrollToTop from './scrollToTop';

export const AppContext = createContext();

function App() {
    const [homeCart, setHomeCart] = useState([]);
    const [singleProd, setSingleProd] = useState({});
    const [userData, setUserData] = useState({});
    let totalPrice = 0;
    const handleAddToCart = (element) => {
        const findProduct = homeCart.find(
            (ele) => ele.id === element.id
        );
        if (findProduct) {
            const updateHomeCart = homeCart.map((ele) =>
                ele.id === findProduct.id
                    ? { ...ele, amount: ele.amount + 1 }
                    : ele
            );
            setHomeCart(updateHomeCart);
        } else {
            const newProduct = { ...element, amount: 1 };
            setHomeCart([...homeCart, newProduct]);
        }
        toast.success('Added to cart!');
    };
    homeCart.map(
        (element) =>
            (totalPrice += element.price * element.amount)
    );
    const handleGetProd = (prod) => {
        setSingleProd(prod);
    };
    return (
        <div className='App'>
            <AppContext.Provider
                value={{
                    data,
                    homeCart,
                    setHomeCart,
                    totalPrice,
                    handleAddToCart,
                    handleGetProd,
                    singleProd,
                    setSingleProd,
                    userData,
                    setUserData,
                }}
            >
                <BrowserRouter>
                    <ScrollToTop />
                    <Header />
                    <Sidebar />
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/all-products'
                            element={<AllProducts />}
                        />
                        <Route
                            path='/about-us'
                            element={<About />}
                        />
                        <Route
                            path='/contact-us'
                            element={<Contact />}
                        />
                        <Route
                            path='/cart'
                            element={<Cart />}
                        />
                        <Route
                            path='/checkout'
                            element={<Checkout />}
                        />
                        <Route
                            path='/login'
                            element={<LoginPage />}
                        />
                        <Route
                            path='/register'
                            element={<Register />}
                        />
                        <Route
                            path='/product-detail'
                            element={<ProductDetail />}
                        />
                    </Routes>
                    <Services />
                    <Footer />
                </BrowserRouter>
                <ToastContainer />
            </AppContext.Provider>
        </div>
    );
}

export default App;
