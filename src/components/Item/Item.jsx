import React from 'react';
import styles from './Item.module.scss';

function Item({ product }) {
	const price = product.price ? (
		<>
			<span className={styles.Price}>{product.price}</span>€
		</>
	) : (
		'Out of stock'
	);

	return (
		<div className={styles.Item}>
			<img src={product.imgUrl} alt={product.model} />
			<div>
				<h3>
					{product.brand} {product.model}
				</h3>
				<p>{price}</p>
			</div>
		</div>
	);
}

export default Item;
