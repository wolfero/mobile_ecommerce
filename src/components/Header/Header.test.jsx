import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header should', () => {
	it('show company name', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);

		const companyName = /MOBILE ECOMMERCE/i;
		expect(screen.getByText(companyName)).toBeDefined();
	});
});
