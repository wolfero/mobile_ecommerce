import React from 'react';

function Item({ product }) {
	const price = product.price ? product.price + '€' : 'Out of stock';

	return (
		<div className="item">
			<img src={product.imgUrl} alt={product.model} />
			<div>
				<h3>{product.brand}</h3>
				<p>{product.model}</p>
				<p>Price: {price}</p>
			</div>
		</div>
	);
}

export default Item;
