import React from 'react';
import { FaGithub } from 'react-icons/fa';
function Footer() {
	const year = new Date();
	return (
		<div className="footer">
			<div className="footer-items">
				<h4>Tebibux &#169; {year.getFullYear()} </h4>
				<p>
					<a href="https://github.com/Tebibux/shopping-cart" >
						<FaGithub />
					</a>
				</p>
			</div>

		</div>
	);
}

export default Footer;