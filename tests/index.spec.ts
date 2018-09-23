import { PexelsWrapper } from '../src/index';
declare var global: any;

describe('PexelsWrapper', () => {
	// beforeEach(function() {
	//
	// 	});
	// });

	it('should instance of PexelsWrapper', () => {
		const client: PexelsWrapper = new PexelsWrapper({});
		expect(client).toBeInstanceOf(PexelsWrapper);
	});

	it('should options defined', () => {
		const client: PexelsWrapper = new PexelsWrapper({
			apiUrl: 'https://pexels.com',
			apiKey: 'abcd123'
		});
		expect(client.apiKey).toStrictEqual('abcd123');
		expect(client.apiUrl).toStrictEqual('https://pexels.com');
	});

	it('should have request method', () => {
		const client: PexelsWrapper = new PexelsWrapper({});
		expect(client.request).toBeDefined();
	})

	it('should call request function', async () => {
		global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ id: '111'}));

		const client: PexelsWrapper = new PexelsWrapper({});
		const response: any = await client.request('https://pexels.com');
		expect(response.id).toBe('111');
	})
});
