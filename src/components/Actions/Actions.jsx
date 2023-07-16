import React, { useState } from 'react';
import { ProductService } from '../../services/ProductService';
import useSection from '../../hooks/useSection';

function Actions({ product }) {
	const { data, updateContextData } = useSection();
	const options = product.options;
	const [selectedColor, setSelectedColor] = useState(options.colors[0]);
	const [selectedStorage, setSelectedStorage] = useState(options.storages[0]);

	const handleStorageChange = (e) => {
		const storage = options.storages.find((storage) => storage.code == e.target.value);
		setSelectedStorage(storage);
	};

	const handleColorChange = (e) => {
		const color = options.colors.find((color) => color.code == e.target.value);
		setSelectedColor(color);
	};

	const handleAddToCart = async () => {
		const productService = new ProductService();
		const response = await productService.addProductToCart(
			product.id,
			selectedColor.code,
			selectedStorage.code,
		);

		const newData = {
			products: data.products,
			productsDetails: data.productsDetails,
			productsInCart: data.productsInCart + response.count,
		};

		updateContextData(newData);
	};

	return (
		<section className="rounded-lg bg-white p-4 shadow-xl">
			<article className="flex flex-col items-start gap-4 md:flex-row">
				<div className="flex w-full items-center justify-around md:w-1/4 md:justify-center md:gap-4">
					<b>Colors</b>
					<div className="w-1/2 md:w-2/3">
						<select
							className="w-full rounded border border-stone-200 p-2 focus:outline-none"
							value={selectedColor.code}
							onChange={handleColorChange}
						>
							{product.options.colors.map((color) => (
								<option key={color.code} value={color.code}>
									{color.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="flex w-full items-center justify-around md:w-1/4 md:justify-center md:gap-4">
					<b>Sizes</b>
					<div className="w-1/2 md:w-2/3">
						<select
							className="w-full rounded border border-stone-200 p-2 focus:outline-none"
							value={selectedStorage.code}
							onChange={handleStorageChange}
						>
							{product.options.storages.map((storage) => (
								<option key={storage.code} value={storage.code}>
									{storage.name}
								</option>
							))}
						</select>
					</div>
				</div>
			</article>
			<article className="md:mx-40 xl:mx-60">
				<button
					className="mb-2 mt-4 w-full bg-stone-900 text-stone-200"
					onClick={handleAddToCart}
				>
					Add to cart
				</button>
			</article>
		</section>
	);
}

export default Actions;
