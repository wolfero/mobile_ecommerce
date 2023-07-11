import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Description } from '../../components';
import { Actions } from '../../components';
import { ProductService } from '../../services/ProductService';

function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const loadData = async () => {
        const productService = new ProductService();
        return await productService.readProductById(id);
    };

    useEffect(() => {
        loadData().then((response) => setProduct(response));
    }, [id]);

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Detalles del producto</h1>
            <div>
                <img src={product.imgUrl} alt={product.model} />
            </div>
            <div>
                <Description product={product} />
                <Actions product={product} />
            </div>
            <div>
                <Link to='/'>Volver a la lista</Link>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
