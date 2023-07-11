import { Routes, Route } from 'react-router-dom';
import { ProductListPage, ProductDetailsPage } from '../pages';

function PageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ProductListPage />} />
            <Route path='/product/:id' element={<ProductDetailsPage />} />
        </Routes>
    );
}

export default PageRoutes;
