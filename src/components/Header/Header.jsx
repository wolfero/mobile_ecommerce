import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSection from '../../hooks/useSection';
import styles from './Header.module.scss';

function Header() {
	const { data } = useSection();
	const { pathname } = useLocation();
	const pathnames = pathname.split('/').filter((item) => item);

	return (
		<header className={styles.Container}>
			<h1>
				<Link to="/">Mobile ECommerce</Link>
			</h1>
			<nav className={styles.Breadcrumb}>
				{pathnames.length > 0 ? (
					<div>
						<Link to="/" className={styles.Active}>
							Products
						</Link>
						<span className={styles.Arrow}>/</span>
						<Link className={styles.NotActive}> Details</Link>
					</div>
				) : (
					<Link to="/" className={styles.NotActive}>
						Products
					</Link>
				)}
				<p className={styles.ProductsCount}>
					Products in Cart
					<span>{data.productsInCart}</span>
				</p>
			</nav>
		</header>
	);
}

export default Header;
