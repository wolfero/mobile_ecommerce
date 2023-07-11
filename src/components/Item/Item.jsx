import React from 'react';

function Item({ product }) {
  return (
    <div className="item">
      <img src={product.imgUrl} alt={product.model} />
      <div>
        <h3>{product.brand}</h3>
        <p>{product.model}</p>
        <p>Precio: {product.price}€</p>
      </div>
    </div>
  );
}

export default Item;
