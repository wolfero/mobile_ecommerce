import React from 'react';

function Description({ product }) {
	const drawPrice = (price) => {
		const data = price ? (
			<span className="">{product.price}€</span>
		) : (
			<span className="rounded-md bg-red-500 px-2 py-1 font-bold uppercase text-white">
				Out of stock
			</span>
		);
		return data;
	};

	const drawCamera = (camera) => {
		const isString = typeof camera === 'string';
		const getCameraData = (cameraData) => cameraData.map((data) => data + ' ');
		return isString ? camera : getCameraData(camera);
	};

	const detailsBuilder = (title, detail) => {
		const drawDetail = detail ? detail : '-';
		return (
			<article className="flex flex-col justify-between gap-2 border-t border-stone-300 p-2 text-stone-600 md:flex-row">
				<b>{title}</b>
				<p>{drawDetail}</p>
			</article>
		);
	};

	return (
		<div className=" rounded-lg bg-white p-4 shadow-xl">
			<header>
				<h2 className="title-font text-2xl tracking-widest text-stone-500">
					{product.brand}
				</h2>
				<h1 className="title-font mb-1 text-3xl font-medium text-stone-900">
					{product.model}
				</h1>
			</header>

			{detailsBuilder('OS', product.os)}
			{detailsBuilder('CPU', product.cpu)}
			{detailsBuilder('RAM', product.ram)}
			{detailsBuilder('Battery', product.battery)}
			{detailsBuilder('Dimensions', product.dimentions)}
			{detailsBuilder('Display resolution', product.displayResolution)}
			{detailsBuilder('Primary camera', drawCamera(product.primaryCamera))}
			{detailsBuilder('Secondary camera', drawCamera(product.secondaryCmera))}
			{detailsBuilder('Wight', product.weight)}
			{detailsBuilder('Price', drawPrice(product.price))}
		</div>
	);
}

export default Description;
