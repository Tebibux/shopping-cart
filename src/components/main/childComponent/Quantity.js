import React, { useEffect, useState } from "react";

const Quantity = ({
	selectedToCart,
	cartArray,
	handleConfirm }) => {

	const [inputValue, setInputValue] = useState(0);

	const handleInput = (e) => {
		e.preventDefault();
		setInputValue(e.target.value);
	};
	const validatePositiveNumber = (e) => {
		if (e.target.value < 0) {
			e.target.value = '';
		}
	}
	useEffect(() => {
	}, [cartArray]);

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
							<span className="nine-number">.99  </span>
							{inputValue !== 0 ? (
								<span>
									X  {inputValue} = {(inputValue * (selectedToCart[selectedToCart.length - 1].productPrice + .99)).toFixed(2)}
								</span>
							) : null}
						</span>
					</p>
				</div>
				<div className="quantity-selection-box">
					<input
						type="number"
						placeholder="input the number"
						className="quantity-selection-box-input"
						onChange={handleInput}
						min="1" onInput={validatePositiveNumber}
					/>
					<button className="decide-to-add-to-cart"
						onClick={() => handleConfirm(selectedToCart, inputValue)}
					>
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
