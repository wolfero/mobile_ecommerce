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
		<div className='bg-red-500'>
			<label>
				<b>Colores: </b>
			</label>
			<select value={selectedColor.code} onChange={handleColorChange}>
				{product.options.colors.map((color) => (
					<option key={color.code} value={color.code}>
						{color.name}
					</option>
				))}
			</select>

			<br />
			<label>
				<b>Almacenamiento: </b>
			</label>
			<select value={selectedStorage.code} onChange={handleStorageChange}>
				{product.options.storages.map((storage) => (
					<option key={storage.code} value={storage.code}>
						{storage.name}
					</option>
				))}
			</select>

			<br />
			<button onClick={handleAddToCart}>Añadir al carrito</button>
		</div>
		// 	<div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
		// 	<div class="flex">
		// 		<span class="mr-3">Color</span>
		// 		<button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
		// 		<button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
		// 		<button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"></button>
		// 	</div>
		// 	<div class="ml-6 flex items-center">
		// 		<span class="mr-3">Size</span>
		// 		<div class="relative">
		// 			<select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
		// 				<option>SM</option>
		// 				<option>M</option>
		// 				<option>L</option>
		// 				<option>XL</option>
		// 			</select>
		// 			<span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
		// 				<svg
		// 					fill="none"
		// 					stroke="currentColor"
		// 					stroke-linecap="round"
		// 					stroke-linejoin="round"
		// 					stroke-width="2"
		// 					class="h-4 w-4"
		// 					viewBox="0 0 24 24"
		// 				>
		// 					<path d="M6 9l6 6 6-6"></path>
		// 				</svg>
		// 			</span>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Actions;
