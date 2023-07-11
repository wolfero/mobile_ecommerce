import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Item,Spinner } from '../../components';
import useSection from '../../hooks/useSection';

function ProductListPage() {
    const { products, updateContextData } = useSection();
    const [productsData, setProductsData] = useState();

    useEffect(() => {
        if (products) {
            setProductsData(products);
        }
    });

    return (
        <div>
            <h1>Lista de productos</h1>
            {productsData ? (
                <>
                    {productsData.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <Item product={product} />
                        </Link>
                    ))}
                </>
            ) : (
                <Spinner />
            )}
        </div>
    );
}

export default ProductListPage;
