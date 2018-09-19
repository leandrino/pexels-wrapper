type pexelsOptions = {
	apiUrl?: string,
	apiKey?: string
}

export class PexelsWrapper {
	apiUrl: string;
	apiKey: string;
	constructor(options?: pexelsOptions) {
		this.apiUrl = options.apiUrl;
		this.apiKey = options.apiKey;
	}

	request (url: string): Promise<Response> {
		const headers: any = {
			Authorization: `Bearer ${this.apiKey}`
		};

		return fetch(url, headers);
	}
}
