import { createContext } from 'react';

const SectionContext = createContext({
	data:{
		products: [],
		productsDetails:[],
		productsInCart: 0,
	},
	updateContextData: () => {},
});

export default SectionContext;
