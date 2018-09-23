import { PexelsWrapper } from "../src";

describe('searchPhotos', () => {
	let pexels;
	beforeEach(() => {
		pexels = new PexelsWrapper({
			apiUrl: 'https://api.pexels.com/v1',
			apiKey: '1xx2xxx3'
		});
		pexels.request = jest.fn();
	});

	it('should exist the searchPhotos method', () => {
		expect(pexels.searchPhotos.default).toBeDefined();
	});

	it('should call PexelsWrapper searchPhotos default function', async () => {
		await pexels.searchPhotos.default('cats');
		expect(pexels.request).toHaveBeenCalled();
	});

	it('should call PexelsWrapper searchPhotos default  with the correct URL', async () => {
		await pexels.searchPhotos.default('dogs');
		expect(pexels.request).toBeCalledWith('https://api.pexels.com/v1/search?query=dogs');
	});

	it('should call PexelsWrapper searchPhotos default with pagination', async () => {
		await pexels.searchPhotos.withPagination('dawning', 20, 1);
		expect(pexels.request).toBeCalledWith('https://api.pexels.com/v1/search?query=dawning&per_page=20&page=1')
	})
});
