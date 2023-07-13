import React from 'react';

function Description({ product }) {
	const price = product.price ? product.price + '€' : 'Out of stock';

	const drawCamera = (camera) => {
		const isString = typeof camera === 'string';
		const getCameraData = (cameraData) => cameraData.map((data) => data + ' ');
		return <p>{isString ? camera : getCameraData(camera)}</p>;
	};

	return (
		<div className=" rounded-lg bg-white p-4 shadow-xl">
			<h2>{product.brand}</h2>
			<h3>{product.model}</h3>
			<p>
				<b>Precio: </b>
				{price}
			</p>
			<p>
				<b>CPU: </b>
				{product.cpu}
			</p>
			<p>
				<b>RAM: </b>
				{product.ram}
			</p>
			<p>
				<b>Sistema Operativo: </b>
				{product.os}
			</p>
			<p>
				<b>Resolución de pantalla: </b>
				{product.displayResolution}
			</p>
			<p>
				<b>Batería: </b>
				{product.battery}
			</p>
			<p>
				<b>Cámara principal: </b>
				<span>{drawCamera(product.primaryCamera)}</span>
			</p>
			<p>
				<b>Cámara secundaria: </b>
				<span>{drawCamera(product.secondaryCmera)}</span>
			</p>
			<p>
				<b>Dimensiones: </b>
				{product.dimentions}
			</p>
			<p>
				<b>Peso: </b>
				{product.weight}g
			</p>
		</div>

		// {/* <h2 class="title-font text-sm tracking-widest text-gray-500">
		// 									BRAND NAME
		// 								</h2>
		// 								<h1 class="title-font mb-1 text-3xl font-medium text-gray-900">
		// 									The Catcher in the Rye
		// 								</h1>
		// 								<div class="mb-4 flex">
		// 									<span class="flex items-center">
		// 										<svg
		// 											fill="currentColor"
		// 											stroke="currentColor"
		// 											stroke-linecap="round"
		// 											stroke-linejoin="round"
		// 											stroke-width="2"
		// 											class="h-4 w-4 text-indigo-500"
		// 											viewBox="0 0 24 24"
		// 										>
		// 											<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
		// 										</svg>
		// 										<svg
		// 											fill="currentColor"
		// 											stroke="currentColor"
		// 											stroke-linecap="round"
		// 											stroke-linejoin="round"
		// 											stroke-width="2"
		// 											class="h-4 w-4 text-indigo-500"
		// 											viewBox="0 0 24 24"
		// 										>
		// 											<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
		// 										</svg>
		// 										<svg
		// 											fill="currentColor"
		// 											stroke="currentColor"
		// 											stroke-linecap="round"
		// 											stroke-linejoin="round"
		// 											stroke-width="2"
		// 											class="h-4 w-4 text-indigo-500"
		// 											viewBox="0 0 24 24"
		// 										>
		// 											<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
		// 										</svg>
		// 										<svg
		// 											fill="currentColor"
		// 											stroke="currentColor"
		// 											stroke-linecap="round"
		// 											stroke-linejoin="round"
		// 											stroke-width="2"
		// 											class="h-4 w-4 text-indigo-500"
		// 											viewBox="0 0 24 24"
		// 										>
		// 											<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
		// 										</svg>
		// 										<svg
		// 											fill="none"
		// 											stroke="currentColor"
		// 											stroke-linecap="round"
		// 											stroke-linejoin="round"
		// 											stroke-width="2"
		// 											class="h-4 w-4 text-indigo-500"
		// 											viewBox="0 0 24 24"
		// 										>
		// 											<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
		// 										</svg>
		// 										<span class="ml-3 text-gray-600">4 Reviews</span>
		// 									</span>
		// 									<span class="space-x-2s ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
		// 										<a class="text-gray-500">
		// 											<svg
		// 												fill="currentColor"
		// 												stroke-linecap="round"
		// 												stroke-linejoin="round"
		// 												stroke-width="2"
		// 												class="h-5 w-5"
		// 												viewBox="0 0 24 24"
		// 											>
		// 												<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
		// 											</svg>
		// 										</a>
		// 										<a class="text-gray-500">
		// 											<svg
		// 												fill="currentColor"
		// 												stroke-linecap="round"
		// 												stroke-linejoin="round"
		// 												stroke-width="2"
		// 												class="h-5 w-5"
		// 												viewBox="0 0 24 24"
		// 											>
		// 												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
		// 											</svg>
		// 										</a>
		// 										<a class="text-gray-500">
		// 											<svg
		// 												fill="currentColor"
		// 												stroke-linecap="round"
		// 												stroke-linejoin="round"
		// 												stroke-width="2"
		// 												class="h-5 w-5"
		// 												viewBox="0 0 24 24"
		// 											>
		// 												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
		// 											</svg>
		// 										</a>
		// 									</span>
		// 								</div>
		// 								<p class="leading-relaxed">
		// 									Fam locavore kickstarter distillery. Mixtape chillwave tumeric
		// 									sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
		// 									juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
		// 									seitan poutine tumeric. Gastropub blue bottle austin listicle
		// 									pour-over, neutra jean shorts keytar banjo tattooed umami
		// 									cardigan.
		// 								</p> */}
	);
}

export default Description;
