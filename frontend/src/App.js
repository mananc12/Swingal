import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { Product } from "./components/Product";
import { AddToCart } from "./components/AddToCart";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { AllProducts } from "./components/AllProducts";
import ProductDetails from "./components/Category-Product/productDetails";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Logout from "./components/Logout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProfile } from "./components/UserProfile";
function App() {
  return (
    <div className="App ">
      <div className="flex flex-col justify-center items-center ml-auto md:mb-24 mr-auto w-full">
        <div className="z-10 md:fixed w-11/12 md:top-0 bg-white">
          <NavBar />
        </div>
      </div>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:category/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div className="w-full mt-10">
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
