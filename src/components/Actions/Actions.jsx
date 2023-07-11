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
			selectedStorage.code
		);

		const newData = {
			products: data.products,
			productsDetails: data.productsDetails,
			productsInCart: data.productsInCart + response.count,
		};

		updateContextData(newData);
	};

	return (
		<div>
			<label>
				Colores:
				<select value={selectedColor.code} onChange={handleColorChange}>
					{product.options.colors.map((color) => (
						<option key={color.code} value={color.code}>
							{color.name}
						</option>
					))}
				</select>
			</label>
			<br />
			<label>
				Almacenamiento:
				<select value={selectedStorage.code} onChange={handleStorageChange}>
					{product.options.storages.map((storage) => (
						<option key={storage.code} value={storage.code}>
							{storage.name}
						</option>
					))}
				</select>
			</label>
			<br />
			<button onClick={handleAddToCart}>Añadir al carrito</button>
		</div>
	);
}

export default Actions;
