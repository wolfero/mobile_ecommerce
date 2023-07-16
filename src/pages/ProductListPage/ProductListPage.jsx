import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item, Spinner } from '../../components';
import useSection from '../../hooks/useSection';

function ProductListPage() {
	const { data } = useSection();
	const [searchText, setSearchText] = useState('');
	const [products, setProducts] = useState([]);

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	function filterProducts() {
		const newProducts = data.products.filter(
			(product) =>
				product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
				product.model.toLowerCase().includes(searchText.toLowerCase()),
		);
		setProducts(newProducts);
	}

	useEffect(() => {
		if (data.products.length > 0) {
			setProducts(data.products);
		}
	}, [data.products]);

	useEffect(() => {
		if (searchText !== '') {
			filterProducts();
		} else {
			setProducts(data.products);
		}
	}, [searchText]);

	return (
		<div className="flex flex-col p-4 m-8 text-center align-middle rounded-2xl bg-stone-200 text-stone-600">
			<section className="container flex flex-col px-1 mx-auto">
				<input
					className="self-center w-full px-8 py-4 rounded-lg md:w-1/2 md:self-end"
					type="text"
					value={searchText}
					onChange={handleSearchChange}
					placeholder="Search products"
				/>
				{products.length ? (
					<section className="flex flex-wrap justify-center gap-2 pt-2 md:gap-0">
						{products.map((product) => (
							<article
								key={product.id}
								className="w-full max-w-sm duration-300 transform cursor-pointer hover:-translate-y-2 md:w-1/2 md:p-2 lg:w-1/4"
							>
								<Link to={`/product/${product.id}`} role="link">
									<Item product={product} />
								</Link>
							</article>
						))}
					</section>
				) : searchText.length > 0 ? (
					<section role="alert" className="my-4">
						<div className="py-4 text-red-700 bg-red-100 border border-red-400 rounded">
							<p>Device not found</p>
						</div>
					</section>
				) : (
					<Spinner />
				)}
			</section>
		</div>
	);
}

export default ProductListPage;
