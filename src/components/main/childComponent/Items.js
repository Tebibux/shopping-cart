import React from "react";
import assets from '../../../asset/asset';
import uuid4 from "uuid4";


const Items = ({ ObjectKeys, assetName, handleClickItem}) => {
	// map through the items 
	// extract item and in each item randomize from the ten item
	// choose one item and display the choose one	
	return (

		<div className="display-item">
			{
				ObjectKeys.map(ObjectKey => {
					const product = assets[ObjectKey][assetName[Math.floor(Math.random() * 6)]];
					const productImg = product.image;
					const productDisc = product.productDisc;
					const productPrice = product.productPrice;
					return (
						<div key={uuid4()}>
							<div className="product-title">{ObjectKey.toUpperCase()}</div>
							<div className="display-item-box"								
								onClick={() => handleClickItem(ObjectKey)}
							>
								<div className="product-item-image">
									<img src={productImg} alt={productDisc} />
								</div>
								<div className="product-item-disc">
									<p className="product-item-description">
										{productDisc}
									</p>
									<p className="product-item-price">
										<span className="dollar">$</span>
										<span className="number">
											{productPrice}
											<span className="nine-number">.99</span>
										</span>

									</p>
								</div>

							</div>
						</div>
					)
				})
			}

		</div>
	)
}

export default Items;