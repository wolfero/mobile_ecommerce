import { useEffect, useState } from 'react';

import { Header, Footer } from './components';
import PageRoutes from './routes/PageRoutes';
import SectionContext from './context/SectionContext';

import './App.css';
import { ProductService } from './services/ProductService';

function App() {
    const [products, setProducts] = useState();

    function updateContextData(newData) {
        setProducts(newData);
    }

    const loadData = async () => {
        const productService = new ProductService();
        return await productService.readProducts();
    };

    useEffect(() => {
        loadData().then((response) => setProducts(response));
    }, []);

    return (
        <SectionContext.Provider value={{ products, updateContextData }}>
            <>
                <Header />
                <PageRoutes />
                <Footer />
            </>
        </SectionContext.Provider>
    );
}

export default App;
