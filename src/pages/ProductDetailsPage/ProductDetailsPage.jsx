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
				(productDetail) => productDetail.id == newProductDetail.id,
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
		<div className="m-4 flex flex-col rounded-2xl bg-stone-200 p-4 text-stone-600">
			{product ? (
				<div className="container mx-auto flex flex-col justify-center gap-4 lg:my-8 lg:flex-row">
					<figure className="flex w-full flex-col justify-center rounded-lg bg-white p-8 shadow-xl lg:w-1/3">
						<img
							className="w-80 self-center"
							alt={product.model}
							src={product.imgUrl}
						/>
					</figure>
					<article className="flex w-full flex-col gap-2 lg:w-2/3">
						<Description product={product} />
						<Actions product={product} />
					</article>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default ProductDetailsPage;
