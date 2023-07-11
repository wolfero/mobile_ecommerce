import { useEffect, useState } from 'react';

import { Header, Footer } from './components';
import PageRoutes from './routes/PageRoutes';
import SectionContext from './context/SectionContext';
import { ProductService } from './services/ProductService';
import { StorageData } from './services/StorageService';

import './App.css';

function App() {
	const [data, setData] = useState({
		products: [],
		productsDetails: [],
		productsInCart: 0,
	});
	const storageData = new StorageData();

	function updateContextData(newData) {
		const dataToUpdate = {
			products: newData.products,
			productsDetails: newData.productsDetails,
			productsInCart: newData.productsInCart,
		};
		setData(dataToUpdate);
		saveData(dataToUpdate);
	}

	const saveData = (dataToSave) => {
		storageData.stashData(dataToSave);
	};

	const loadData = async () => {
		const productService = new ProductService();
		const response = await productService.readProducts();
		const newData = {
			products: response,
			productsDetails: data.productsDetails,
			productsInCart: data.productsInCart,
		};
		return newData;
	};

	useEffect(() => {
		const savedData = storageData.unStashData();
		if (savedData) {
			updateContextData(savedData);
		} else {
			loadData().then((response) => updateContextData(response));
		}
	}, []);

	return (
		<SectionContext.Provider value={{ data, updateContextData }}>
			<>
				<Header />
				<PageRoutes />
				<Footer />
			</>
		</SectionContext.Provider>
	);
}
export default App;
