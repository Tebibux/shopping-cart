import React from "react";
import { Link } from "react-router-dom";

const HeaderNavigation = () => {
	return (
		<div className="header-container">
				<h1 className="logo-text">KotteShop</h1>
			<nav className="navbar">
				<ul className="nav-links">
					<li className="nav-link">Cart</li>
					<li className="nav-link">About</li>
					<li className="nav-link">Contact</li>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderNavigation;