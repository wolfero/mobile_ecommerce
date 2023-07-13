import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item, Spinner } from '../../components';
import useSection from '../../hooks/useSection';

function ProductListPage() {
	const { data } = useSection();
	const [searchText, setSearchText] = useState('');
	const [productsData, setProductsData] = useState();

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	const filterProducts = () => {
		const newProducts = productsData.filter(
			(product) =>
				product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
				product.model.toLowerCase().includes(searchText.toLowerCase()),
		);
		setProductsData(newProducts);
	};

	useEffect(() => {
		if (searchText != '') {
			filterProducts();
		} else if (data.products) {
			setProductsData(data.products);
		}
	}, [data.products, searchText]);

	return (
		<div className="m-8 flex flex-col rounded-2xl bg-stone-200 p-4 text-center align-middle text-stone-600">
			<section className="container mx-auto flex flex-col px-1">
				<input
					className="w-full self-center rounded-lg px-8 py-4 md:w-1/2 md:self-end"
					type="text"
					value={searchText}
					onChange={handleSearchChange}
					placeholder="Search products"
				/>
				{productsData ? (
					<section className="flex flex-wrap justify-center gap-2 pt-2 md:gap-0">
						{productsData.map((product) => (
							<article
								key={product.id}
								className="w-full max-w-sm transform cursor-pointer duration-300 hover:-translate-y-2 md:w-1/2 lg:w-1/4 md:p-2"
							>
								<Link to={`/product/${product.id}`}>
									<Item product={product} />
								</Link>
							</article>
						))}
					</section>
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
