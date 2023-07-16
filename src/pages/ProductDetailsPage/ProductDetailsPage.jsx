import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useSection from '../../hooks/useSection';
import { ProductService } from '../../services/ProductService';
import { StorageService } from '../../services/StorageService';
import { Description, Spinner, Actions } from '../../components';

function ProductDetailsPage() {
	const storageService = new StorageService();
	const productService = new ProductService();
	const { id } = useParams();
	const { data, updateContextData } = useSection();
	const [product, setProduct] = useState(null);

	const saveDataIfNotExist = (response) => {
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
		const response = await productService.readProductById(id);
		return saveDataIfNotExist(response);
	};

	useEffect(() => {
		const savedData = storageService.unSaveData();
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
		<div className="flex flex-col p-4 m-4 rounded-2xl bg-stone-200 text-stone-600">
			{product ? (
				<div className="container flex flex-col justify-center gap-4 mx-auto lg:my-8 lg:flex-row">
					<figure className="flex flex-col justify-center w-full p-8 bg-white rounded-lg shadow-xl lg:w-1/3">
						<img
							className="self-center w-80"
							alt={product.model}
							src={product.imgUrl}
							loading="lazy"
						/>
					</figure>
					<article className="flex flex-col w-full gap-2 lg:w-2/3">
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
