import React from 'react';

function Item({ product }) {
	const price = product.price ? (
		<p className="text-xl font-bold text-stone-600">
			<span className="text-4xl">{product.price}</span>€
		</p>
	) : (
		<p className="mt-1 bg-red-500 text-3xl font-bold uppercase text-white">Out of stock</p>
	);

	return (
		<div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl">
			<img src={product.imgUrl} alt={product.model} className="mx-auto my-2 flex h-60" />
			<p className="uppercase text-stone-600">
				{product.brand} {product.model}
			</p>
			{price}
		</div>
	);
}

export default Item;
