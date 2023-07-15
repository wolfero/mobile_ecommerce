import { useEffect, useState } from 'react';
import { Header } from './components';
import PageRoutes from './routes/PageRoutes';
import SectionContext from './context/SectionContext';
import { ProductService } from './services/ProductService';
import { StorageService } from './services/StorageService';

function App() {
	const productService = new ProductService();
	const storageService = new StorageService();
	const [data, setData] = useState({
		products: [],
		productsDetails: [],
		productsInCart: 0,
	});

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
		const response = await productService.readProducts();
		const newData = {
			products: response,
			productsDetails: data.productsDetails,
			productsInCart: data.productsInCart,
		};
		return newData;
	};

	useEffect(() => {
		const savedData = storageService.unStashData();
		if (savedData) {
			updateContextData(savedData);
		} else {
			loadData().then((response) => updateContextData(response));
		}
	}, []);

	return (
		<SectionContext.Provider value={{ data, updateContextData }}>
			<Header />
			<PageRoutes />
		</SectionContext.Provider>
	);
}
export default App;
