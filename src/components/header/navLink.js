import React from "react";
import { Link } from "react-router-dom";
const HeaderNavigation = ({ cartArray }) => {
	return (
		<div className="header-container">
			<h1 className="logo-text">KotteShop</h1>
			<nav className="navbar">
				<ul className="nav-links">
					<Link to="/cart">
						<li className="nav-link">
							Cart <span className="number-cart-added">
								{cartArray.length}
								</span>
						</li>
					</Link>

					<li className="nav-link">About</li>
					<li className="nav-link">Contact</li>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderNavigation;