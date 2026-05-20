import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  setRememberMe,
} from "../Store/Slices/authSlice";
import { FaLeaf } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginStart());
    // Hardcoded mock validation (Urban Harvest demo)
    if (email === "admin@urbanharvest.com" && password === "harvest123") {
      const user = {
        id: 1,
        name: "Alex Morgan",
        email: "admin@urbanharvest.com",
        role: "Admin",
      };
      dispatch(loginSuccess({ user, rememberMe: remember }));
      dispatch(setRememberMe(remember));
      navigate("/dashboard");
    } else {
      dispatch(
        loginFailure(
          "Invalid email or password. Try admin@urbanharvest.com / harvest123",
        ),
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <FaLeaf size={48} color="#2e7d32" />
          <h2 style={{ marginTop: 12, fontWeight: 700 }}>Urban Harvest</h2>
          <p style={{ color: "#4b6b55" }}>Admin access panel</p>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@urbanharvest.com"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{" "}
            Remember Me
          </label>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>
        <p
          style={{
            textAlign: "center",
            marginTop: 28,
            fontSize: "0.8rem",
            color: "#6c8b74",
          }}
        >
          Demo: admin@urbanharvest.com / harvest123
        </p>
      </div>
    </div>
  );
};

export default Login;
