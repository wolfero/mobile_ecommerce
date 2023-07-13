import React from 'react';

function Description({ product }) {
	const drawPrice = (price) => {
		const data = price ? (
			<p className="pb-2 text-xl font-bold text-stone-600">
				<span className="text-4xl">{product.price}</span>€
			</p>
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
		return <p>{isString ? camera : getCameraData(camera)}</p>;
	};

	return (
		<div className=" rounded-lg bg-white p-4 shadow-xl">
			<header>
				<h2 class="title-font text-2xl tracking-widest text-stone-500">{product.brand}</h2>
				<h1 class="title-font mb-1 text-3xl font-medium text-stone-900">{product.model}</h1>
			</header>
			<article>
				<b>Precio: </b>
				{drawPrice(product.price)}
			</article>
			<article>
				<b>CPU: </b>
				{product.cpu}
			</article>
			<article>
				<b>RAM: </b>
				{product.ram}
			</article>
			<article>
				<b>Sistema Operativo: </b>
				{product.os}
			</article>
			<article>
				<b>Resolución de pantalla: </b>
				{product.displayResolution}
			</article>
			<article>
				<b>Batería: </b>
				{product.battery}
			</article>
			<article>
				<b>Cámara principal: </b>
				<span>{drawCamera(product.primaryCamera)}</span>
			</article>
			<article>
				<b>Cámara secundaria: </b>
				<span>{drawCamera(product.secondaryCmera)}</span>
			</article>
			<article>
				<b>Dimensiones: </b>
				{product.dimentions}
			</article>
			<article>
				<b>Peso: </b>
				{product.weight}g
			</article>
		</div>
	);
}

export default Description;
