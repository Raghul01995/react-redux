import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import LoginModel from "./LoginModel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../supabase";
import { removeUser } from "../slices/userSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);
  console.log(user);

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(removeUser(null));
    }
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              width="100%"
              height="50px"
              alt="Flipkart"
            />
          </Link>
          <div className="navbar-search">
            <input
              className="navbar-searchbox"
              type="text"
              placeholder="Search for Products,brand and more"
            />

            <button className="search-btn">
              <IoSearch />
            </button>
          </div>
          {user ? (
            <h3 onClick={signOut}>@{user?.email.slice(0, 10)}</h3>
          ) : (
            <div className="navbar-btn" onClick={() => setIsOpen(true)}>
              Login
            </div>
          )}
          <div className="bcs">
            <h3>Become a Seller</h3>
          </div>
          <div className="navbar-more">
            More
            <span>
              <FaChevronDown />
            </span>
          </div>
          <div className="navbar-cart">
            <Link to={"/Cart"} className="cart">
              Cart
            </Link>
            <span className="cart-icon">
              <FaShoppingCart />
            </span>
          </div>
        </div>
        <LoginModel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
