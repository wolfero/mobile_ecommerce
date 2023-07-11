import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item, Spinner } from '../../components';
import useSection from '../../hooks/useSection';

function ProductListPage() {
	const { data } = useSection();
	const [productsData, setProductsData] = useState();

	useEffect(() => {
		if (data.products) {
			setProductsData(data.products);
		}
	});

	return (
		<div>
			<h1>Lista de productos</h1>
			{productsData ? (
				<>
					{productsData.map((product) => (
						<Link key={product.id} to={`/product/${product.id}`}>
							<Item product={product} />
						</Link>
					))}
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default ProductListPage;
