import { useState } from "react";
import "./LoginModel.css";
import { RxCross2 } from "react-icons/rx";
import supabase from "../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";


export default function LoginModel({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);

  const dispatch = useDispatch()

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data.user) {
      alert("Account created. Please verify your email...");
    }
  };
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error?.message);
      return
    }
    dispatch(setUser(data.user));
  };

  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="login-des">
              Get Access to your Order, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            className="Login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's
            <span style={{ color: "blue" }}>Terms of Use</span>
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signup}>
              Signup
            </button>
          )}
          <p className="Login-signup" onClick={() => setLoginType(!loginType)}>
            New to Flipkart? Create an account
          </p>
        </div>

        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
