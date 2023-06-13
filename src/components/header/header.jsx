import React from 'react'
import HeaderNavigation from './navLink';
const Header = ({ cartArray }) => {
	return (
		<div className="header">
			<HeaderNavigation cartArray={cartArray} />
		</div>
	)
}

export default Header;