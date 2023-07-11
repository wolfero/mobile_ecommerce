
const URL = "https://itx-frontend-test.onrender.com/api";
const requestOptions = {
    redirect: 'follow'
};


export class ProductService {
    async readProducts() {
        requestOptions.method = 'GET';
        return fetch(URL + "/product", requestOptions)
            .then(response => response.json())
    }

    async readProductById(productId) {
        requestOptions.method = 'GET';
        return fetch(URL + "/product/" + productId, requestOptions)
            .then(response => response.json())
    }

    async addProductToCart(productId, colorCode, storageCode) {
        const raw = { "id": productId, "colorCode": colorCode, "storageCode": storageCode }

        requestOptions.method = 'POST';
        requestOptions.body = raw;
        requestOptions.mode = "no-cors";
        requestOptions.headers = { 'Content-Type': 'application/json' };

        return fetch(URL + "/cart", requestOptions)
            .then(response => response)
    }
}