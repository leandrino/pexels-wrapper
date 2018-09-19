import { PexelsWrapper } from '../src/index'

describe('PexelsWrapper', () => {
	it('should instance of PexelsWrapper', () => {
		const client: PexelsWrapper = new PexelsWrapper({});
		expect(client).toBeInstanceOf(PexelsWrapper)
	});
	it('should options defined', () => {
		const client: PexelsWrapper = new PexelsWrapper({
			apiUrl: 'https://pexels.com',
			apiKey: 'abcd123'
		});
		expect(client.apiKey).toStrictEqual('abcd123')
		expect(client.apiUrl).toStrictEqual('https://pexels.com')
	});
	it('should have request method', () => {
		const client: PexelsWrapper = new PexelsWrapper({})
		expect(client.request).toBeDefined()
	})
	// should call ajax when request
})
