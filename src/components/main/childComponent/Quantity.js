import React, { useState } from "react";

const Quantity = ({ selectedToCart }) => {
	const [inputValue, setInputValue] = useState(0);

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	if (selectedToCart.length !== 0) {
		return (
			<div className="cart-quantity-box">
				<div className="cart-quantity-box-img">
					<img
						src={selectedToCart[selectedToCart.length - 1].image}
						alt={selectedToCart[selectedToCart.length - 1].productDisc}
					/>
				</div>
				<div className="cart-quantity-box-desc">
					<p className="product-item-description">
						{selectedToCart[selectedToCart.length - 1].productDisc}
					</p>
					<p className="product-item-price">
						<span className="dollar">$</span>
						<span className="number">
							{selectedToCart[selectedToCart.length - 1].productPrice}
							<span className="nine-number">.99  X  </span>
							{inputValue !== 0 ? (
								<span>
									{inputValue} = {inputValue * (selectedToCart[selectedToCart.length - 1].productPrice + .99)}
								</span>
							) : null}
						</span>
					</p>
				</div>
				<div className="quantity-selection-box">
					<input
						type="number"
						name=""
						id=""
						placeholder="input the number"
						className="quantity-selection-box-input"
						onChange={handleInput}
					/>
					<button className="decide-to-add-to-cart">
						Confirm
					</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Quantity;
