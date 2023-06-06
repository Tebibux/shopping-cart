import React from "react";

const SelectedCatagory = ({ selectedCatagories, assetName }) => {
	const catagoryElementsKeyArray = Object.keys(selectedCatagories);
	const catagoryElementArray = Object.entries(selectedCatagories);


	const catagoryToBeChecked = catagoryElementArray.map((catagoryElement, index=0) => {
		
	})

		console.log(catagoryElementArray);

	//   const catagoryArray = selectedCatagories.map()

	return <h2>Hi, there is no bug found</h2>;
};

export default SelectedCatagory;
