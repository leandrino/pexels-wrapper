import searchPhotos from './search-photos'
type PexelsOptions = {
	apiUrl?: string,
	apiKey?: string
}

export class PexelsWrapper {
	apiUrl: string;
	apiKey: string;
	searchPhotos: any;
	constructor(options?: PexelsOptions) {
		this.apiUrl = options.apiUrl;
		this.apiKey = options.apiKey;

		this.searchPhotos = searchPhotos.bind(this)();
	}

	request (url: string): Promise<Response> {
		const headers: any = {
			Authorization: `${this.apiKey}`
		};

		return fetch(url, headers);
	}
}
