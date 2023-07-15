const URL = 'https://itx-frontend-test.onrender.com/api';

export class ProductService {
	async readProducts() {
		const requestOptions = {
			redirect: 'follow',
			method: 'GET',
		};
		return fetch(URL + '/product', requestOptions).then((response) => response.json());
	}

	async readProductById(productId) {
		const requestOptions = {
			redirect: 'follow',
			method: 'GET',
		};
		return fetch(URL + '/product/' + productId, requestOptions).then((response) =>
			response.json()
		);
	}

	async addProductToCart(id, colorCode, storageCode) {
		const body = JSON.stringify({
			id,
			colorCode,
			storageCode,
		});
		const requestOptions = {
			redirect: 'follow',
			method: 'POST',
			body: body,
			headers: { 'Content-Type': 'application/json' },
		};

		return fetch(URL + '/cart', requestOptions).then((response) => response.json());
	}
}
