import React from 'react';
import { Link } from 'react-router-dom';
import useSection from '../../hooks/useSection';

function Header() {
	const { data } = useSection();

	return (
		<header>
			<Link to="/">Logo</Link>
			<nav>
				//TODO barras navegación
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>
			<div>
                <span>{data.productsInCart}</span>
            </div>
		</header>
	);
}

export default Header;
