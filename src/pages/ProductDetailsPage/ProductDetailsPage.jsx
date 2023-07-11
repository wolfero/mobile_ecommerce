import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Description, Spinner } from '../../components';
import { Actions } from '../../components';
import { ProductService } from '../../services/ProductService';
import { StorageData } from '../../services/StorageService';
import useSection from '../../hooks/useSection';

function ProductDetailsPage() {
	const { id } = useParams();
	const { data, updateContextData } = useSection();
	const [product, setProduct] = useState(null);
	const storageData = new StorageData();

	const createNewData = (response) => {
		if (!containsDetail(response)) {
			data.productsDetails.push(response);
		}
		return {
			products: data.products,
			productsDetails: data.productsDetails,
			productsInCart: data.productsInCart,
		};
	};

	const containsDetail = (newProductDetail) => {
		if (data.productsDetails.length) {
			const foundDetail = data.productsDetails.find(
				(productDetail) => productDetail.id == newProductDetail.id
			);
			if (foundDetail) {
				return true;
			}
		}
		return false;
	};

	const foundDetail = (productsDetails) => {
		return productsDetails.find((detail) => detail.id == id);
	};

	const loadData = async () => {
		const productService = new ProductService();
		const response = await productService.readProductById(id);
		return createNewData(response);
	};

	useEffect(() => {
		const savedData = storageData.unStashData();
		let detail = foundDetail(savedData.productsDetails);
		if (detail) {
			setProduct(detail);
		} else {
			loadData().then((response) => {
				updateContextData(response);
				detail = foundDetail(data.productsDetails);
				setProduct(detail);
			});
		}
	}, [id]);

	return (
		<div>
			<h1>Detalles del producto</h1>
			{product ? (
				<div>
					<div>
						<img src={product.imgUrl} alt={product.model} />
					</div>
					<div>
						<Description product={product} />
						<Actions product={product} />
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default ProductDetailsPage;
