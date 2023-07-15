import React from 'react';

function Description({ product }) {
	const drawPrice = (price) => {
		const data = price ? (
			<span className="">{product.price}€</span>
		) : (
			<span className="px-2 py-1 font-bold text-white uppercase bg-red-500 rounded-md">
				Out of stock
			</span>
		);
		return data;
	};

	const drawCamera = (camera) => {
		const isString = typeof camera === 'string';
		if (isString) {
			return camera;
		} else {
			return camera.map((data) => data + ' ');
		}
	};

	const detailsBuilder = (title, detail) => {
		const drawDetail = detail ? detail : '-';
		return (
			<article className="flex flex-col justify-between gap-2 p-2 border-t border-stone-300 text-stone-600 md:flex-row">
				<b>{title}</b>
				<p>{drawDetail}</p>
			</article>
		);
	};

	return (
		<section className="p-4 bg-white rounded-lg shadow-xl">
			<header>
				<h2 className="text-2xl tracking-widest title-font text-stone-500">
					{product.brand}
				</h2>
				<h1 className="mb-1 text-3xl font-medium title-font text-stone-900">
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
		</section>
	);
}

export default Description;
