import React from "react";
import assetObject from "../../../asset/asset";
import uuid4 from "uuid4";


const SelectedCatagory = ({
	selectedCatagories,
	handleAddToCart
}) => {


	const itemsSelected = Object.entries(assetObject[selectedCatagories]);

	return (
		<div className="display-item">
			{
				itemsSelected.map((item) => {
					const itemImg = item[1].image;
					const itemDesc = item[1].productDisc;
					const itemPrice = item[1].productPrice;
					return (
						<div key={uuid4()}>
							<div className="display-item-box">
								<div className="product-item-image">
									<img src={itemImg} alt={itemDesc} />
								</div>
								<div className="product-item-disc">
									<p className="product-item-description">
										{itemDesc}
									</p>
									<p className="product-item-price">
										<span className="dollar">$</span>
										<span className="number">
											{itemPrice}
											<span className="nine-number">.99</span>
										</span>
									</p>
									<button className="add-to-cart-btn" onClick={() => handleAddToCart(item[1])}>Add to Cart </button>
								</div>

							</div>
						</div>
					)
				})
			}

		</div>

	)
};

export default SelectedCatagory;
