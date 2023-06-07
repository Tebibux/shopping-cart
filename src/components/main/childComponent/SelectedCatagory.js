import React from "react";
import assetObject from "../../../asset/asset";
import uuid4 from "uuid4";


const SelectedCatagory = ({
	assetName,
	handleClickItem,
	selectedCatagories }) => {


	const itemsSelected = Object.entries(assetObject[selectedCatagories]);

	return (
		<div className="display-item">
			{
				itemsSelected.map((item) => {
					console.log(item[1])
					const itemImg = item[1].image;
					const itemDesc = item[1].productDisc;
					const itemPrice = item[1].productPrice;
					return (
						<>
							<div className="display-item-box"
								key={uuid4()}
								
							>
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
								</div>

							</div>
						</>
					)
				})
			}

		</div>
		// <h1>hey there it is working in progress</h1>

	)
};

export default SelectedCatagory;
