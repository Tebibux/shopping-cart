import React from "react";

const ItemSelected = ({setSelectElement}) => {
	setSelectElement(false)
	return (
		<div className="item-selected-message-box">
			<h3>Your Item is Add to Cart</h3>
			
		</div>
	)
}

export default ItemSelected