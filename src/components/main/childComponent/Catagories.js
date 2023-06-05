import React from "react";
import assets from '../../../asset/asset';
import uuid4 from "uuid4";

const Catagories = () => {
	// const items = Object.keys(assets).map(item => item);
	const items = Object.keys(assets)

	return (
		<div className="catagories-container">
			<h1 className="catagories-title">Catagories</h1>
			<ul className="catagories">
				{items.map(item => {
					return (
						<li className="item-title" key={uuid4()}>
							{item.toLocaleUpperCase()}
						</li>
					)
				}
				)}
			</ul>
		</div>
	)
}
export default Catagories;