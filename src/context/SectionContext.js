import { createContext } from 'react';

const SectionContext = createContext({
	products: {},
	updateContextData: () => {},
});

export default SectionContext;

