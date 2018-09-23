function searcher(query: string) {
	this.request(`${this.apiUrl}/search?query=${query}`);
}

function searcherWithPagination(query: string, perPage: number, page: number) {
	this.request(`${this.apiUrl}/search?query=${query}&per_page=${perPage}&page=${page}`);
}

export default function searchPhotos() {
	return {
		default: searcher.bind(this),
		withPagination: searcherWithPagination.bind(this)
	};
}
