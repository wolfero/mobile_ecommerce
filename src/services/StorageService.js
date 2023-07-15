export class StorageService {
	stashData(data) {
		localStorage.removeItem('data');
		var cacheData = {
			data: data,
			expiration: new Date().getTime() + 60 * 60 * 1000,
		};
		localStorage.setItem('data', JSON.stringify(cacheData));
	}

	unStashData() {
		var stashedData = localStorage.getItem('data');

		if (stashedData) {
			var cacheData = JSON.parse(stashedData);

			if (new Date().getTime() < cacheData.expiration) {
				return cacheData.data;
			} else {
				localStorage.removeItem('data');
			}
		}

		// No hay datos almacenados o los datos han expirado
		return null;
	}
}
