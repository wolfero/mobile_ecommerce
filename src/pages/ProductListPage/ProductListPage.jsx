import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item, Spinner } from '../../components';
import useSection from '../../hooks/useSection';

import styles from './ProductListPage.module.scss';

function ProductListPage() {
	const { data } = useSection();
	const [searchText, setSearchText] = useState('');
	const [productsData, setProductsData] = useState();
	const [filteredProducts, setFilteredProducts] = useState();

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	const filterProducts = () => {
		const newProducts = productsData.filter(
			(product) =>
				product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
				product.model.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredProducts(newProducts);
	};

	useEffect(() => {
		if (data.products) {
			setProductsData(data.products);
		}
		if (searchText != '') {
			filterProducts();
		}
	}, [data.products, searchText]);

	return (
		<div className={styles.Container}>
			<section className={styles.Search}>
				<input
					type="text"
					value={searchText}
					onChange={handleSearchChange}
					placeholder="Search products"
				/>
			</section>

			<section className={styles.List}>
				{filteredProducts ? (
					<article>
						{filteredProducts.map((product) => (
							<Link key={product.id} to={`/product/${product.id}`}>
								<Item product={product} />
							</Link>
						))}
					</article>
				) : productsData ? (
					<article>
						{productsData.map((product) => (
							<Link key={product.id} to={`/product/${product.id}`}>
								<Item product={product} />
							</Link>
						))}
					</article>
				) : (
					<>
						<Spinner />
					</>
				)}
			</section>
		</div>
	);
}

export default ProductListPage;
