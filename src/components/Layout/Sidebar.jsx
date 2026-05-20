import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/Slices/authSlice";
import { FaTachometerAlt, FaBox, FaSignOutAlt, FaLeaf } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isMobileOpen, onLinkClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`sidebar ${isMobileOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
          <FaLeaf className="logo-icon" />
          <span>Urban</span>
          <span>Harvest</span>
        </div>
      </div>
      <div className="nav-links">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={onLinkClick}
        >
          <FaTachometerAlt size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onClick={onLinkClick}
        >
          <FaBox size={20} />
          <span>Product Management</span>
        </NavLink>
      </div>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
