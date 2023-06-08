import React from "react";

const Quantity = ({ selectedToCart }) => {
	console.log(selectedToCart);
	if (selectedToCart.length !== 0) {
		return (
			<div className="cart-quantity-box">
				<div className="cart-quantity-box-img">
					<img src="" alt="" />
				</div>
				<div className="cart-quantity-box-desc">
					<p className="cart-quantity-box-desc">
						the description will be listed here
					</p>
					<p className="cart-quantity-box-price">
						the product price will be listed here
					</p>
				</div>

			</div>
		)
	} else {
		return console.log(selectedToCart.length)
	}
}

export default Quantity;