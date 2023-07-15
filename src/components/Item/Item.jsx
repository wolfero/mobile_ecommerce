import React from 'react';

function Item({ product }) {
	const price = product.price ? (
		<p className="pb-2 text-xl font-bold text-stone-600">
			<span className="text-4xl">{product.price}</span>€
		</p>
	) : (
		<p className="py-2 text-2xl font-bold text-white uppercase bg-red-500">Out of stock</p>
	);

	return (
		<div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-xl">
			<img src={product.imgUrl} alt={product.model} className="flex mx-auto my-2 h-60" loading='lazy'/>
			<p className="text-lg uppercase text-stone-600">{product.brand}</p>
			<p className="text-lg uppercase text-stone-600">{product.model}</p>
			{price}
		</div>
	);
}

export default Item;
