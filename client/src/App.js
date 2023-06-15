import { useState, useEffect, createContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Header from './components/header';
import Services from './components/services';
import Footer from './components/footer';
import Sidebar from '../src/components/sidebar';
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
import Admin from './components/admin/admin-page';
import AddProd from './components/admin/addProd';
import AdminDashboard from './components/admin/admin-dashboard';
import UsersManager from './components/admin/admin-users-mng';
import axios from 'axios';
import AdminProdMng from './components/admin/admin-prod-mng';
import EditProd from './components/admin/editProd';

export const AppContext = createContext();

function App() {
  const [homeCart, setHomeCart] = useState([]);
  const [singleProd, setSingleProd] = useState({});
  const [userData, setUserData] = useState({});
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);

  let totalPrice = 0;

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get('http://localhost:8000/products').then((response) => {
        setData(response.data.products);
      });
    };
    dataFetch();
  }, []);

  const handleAddToCart = (element) => {
    const findProduct = homeCart.find((ele) => ele._id === element._id);
    if (findProduct) {
      const updateHomeCart = homeCart.map((ele) =>
        ele._id === findProduct._id ? { ...ele, amount: ele.amount + 1 } : ele
      );
      setHomeCart(updateHomeCart);
    } else {
      const newProduct = { ...element, amount: 1 };
      setHomeCart([...homeCart, newProduct]);
    }
    toast.success('Added to cart!');
  };

  homeCart.map(
    (element) => (totalPrice += element.price.$numberDecimal * element.amount)
  );
  const handleGetProd = (prod) => {
    setSingleProd(prod);
  };

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          data,
          setData,
          homeCart,
          setHomeCart,
          totalPrice,
          handleAddToCart,
          handleGetProd,
          singleProd,
          setSingleProd,
          userData,
          setUserData,
          products,
          setProducts,
        }}
      >
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
          <Route
            path='/admin-page'
            element={<Admin />}
          >
            <Route
              path='/admin-page/dashboard'
              element={<AdminDashboard />}
            />
            <Route
              path='/admin-page/products-manager'
              element={<AdminProdMng />}
            />
            <Route
              path='/admin-page/add-product'
              element={<AddProd />}
            />
            <Route
              path='/admin-page/edit-product'
              element={<EditProd />}
            />
            <Route
              path='/admin-page/users-manager'
              element={<UsersManager />}
            />
          </Route>
        </Routes>
        <Services />
        <Footer />
        <ToastContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
