import React from 'react';

function Description({ product }) {
    return (
        <div>
            <h2>{product.brand}</h2>
            <h3>{product.model}</h3>
            <p>Precio: {product.price}€</p>
            <p>CPU: {product.cpu}</p>
            <p>RAM: {product.ram}</p>
            <p>Sistema Operativo: {product.os}</p>
            <p>Resolución de pantalla: {product.displayResolution}</p>
            <p>Batería: {product.battery}</p>
            <div>
                <h4>Cámaras:</h4>
                <p>
                    Cámara principal: {product.primaryCamera[0]}{' '}
                    {product.primaryCamera[1]}
                </p>
                <p>
                    Cámara secundaria: {product.secondaryCmera[0]}{' '}
                    {product.secondaryCmera[1]}
                </p>
            </div>
            <p>Dimensiones: {product.dimentions}</p>
            <p>Peso: {product.weight}g</p>
        </div>
    );
}

export default Description;
