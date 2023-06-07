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
				itemsSelected.map((item, index = 0) => {
					index += 1;
					console.log(item[index])
					return (
						<>
							{/* <div className="display-item-box"
								key={uuid4()}
								
							>
								<div className="product-item-image">
									<img src={itemImg} alt={itemDisc} />
								</div>
								<div className="product-item-disc">
									<p className="product-item-description">
										{itemDisc}
									</p>
									<p className="product-item-price">
										<span className="dollar">$</span>
										<span className="number">
											{itemPrice}
											<span className="nine-number">.99</span>
										</span>

									</p>
								</div>

							</div> */}
							<h1>hey about this</h1>
						</>
					)
				})
			}

		</div>
		// <h1>hey there it is working in progress</h1>

	)
};

export default SelectedCatagory;
