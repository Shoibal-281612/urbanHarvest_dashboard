import React from "react";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = ({ onMenuToggle }) => {
  const { user } = useSelector((state) => state.auth);
  const displayName = user?.name || "Alex Morgan";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="top-header">
      <button className="menu-toggle" onClick={onMenuToggle} aria-label="Menu">
        <FaBars />
      </button>
      <div className="welcome-text">Hello, {displayName.split(" ")[0]} 👋</div>
      <div className="header-right">
        <div className="profile-section">
          <div className="avatar">{initial}</div>
          <div className="user-info">
            <h4>{displayName}</h4>
            <p>Admin • Urban Harvest</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
