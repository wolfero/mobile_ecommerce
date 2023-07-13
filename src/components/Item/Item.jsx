import React from 'react';

function Item({ product }) {
	const price = product.price ? (
		<p className="pb-2 text-xl font-bold text-stone-600">
			<span className="text-4xl">{product.price}</span>€
		</p>
	) : (
		<p className="bg-red-500 py-2 text-2xl font-bold uppercase text-white">Out of stock</p>
	);

	return (
		<div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl">
			<img src={product.imgUrl} alt={product.model} className="mx-auto my-2 flex h-60" />
			<p className="text-lg uppercase text-stone-600">{product.brand}</p>
			<p className="text-lg uppercase text-stone-600">{product.model}</p>
			{price}
		</div>
	);
}

export default Item;
