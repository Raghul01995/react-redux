import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart"
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Product from "./pages/Product/Product";
import "./App.css";
import { useDispatch } from "react-redux";
import supabase from "./supabase";
import { setUser } from "./slices/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch= useDispatch()
  const getUser = async() =>{
    const {data} = await supabase.auth.getSession();
    console.log(data)
    dispatch(setUser(data.session.user));
  }

  useEffect(()=> {
    getUser();
  },[])
  return (
    
   <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>}/>
      <Route path="/ProductDetails" element={<ProductDetails/>}/>
      <Route path='/Cart' element={<Cart />}/>
     </Routes>

   </BrowserRouter>
  );
}

export default App;
