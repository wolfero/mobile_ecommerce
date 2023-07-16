import { render, screen} from '@testing-library/react';
import { expect, test } from 'vitest';
import ProductListPage from './ProductListPage';

describe('ProductListPage should', () => {
	test('render Spinner when products are empty', () => {
		render(<ProductListPage />);

		const spinnerElement = screen.getByAltText('Loader');
		expect(spinnerElement != null).true;
	});
});
