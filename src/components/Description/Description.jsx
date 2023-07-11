import React from 'react';

function Description({ product }) {
	const price = product.price ? product.price + '€' : 'Out of stock';
	const isString = (productCamera) => typeof productCamera === 'string';
	const camera = (productCamera) => productCamera.map((camera) => camera + ' ');

	return (
		<div>
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
			<div>
				<h4>Cámaras:</h4>
				<p>
					<b>Cámara principal: </b>
					{isString(product.primaryCamera) ? (
						<span>{product.primaryCamera}</span>
					) : (
						<span>{camera(product.primaryCamera)}</span>
					)}
				</p>
				<p>
					<b>Cámara secundaria: </b>
					{isString(product.secondaryCmera) ? (
						<span>{product.secondaryCmera}</span>
					) : (
						<span>{camera(product.secondaryCmera)}</span>
					)}
				</p>
			</div>
			<p>
				<b>Dimensiones: </b>
				{product.dimentions}
			</p>
			<p>
				<b>Peso: </b>
				{product.weight}g
			</p>
		</div>
	);
}

export default Description;
