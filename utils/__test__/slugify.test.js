import { slugify } from '../slugify';

describe('utils > slugify', () => {
	it('should converts a string to slug', () => {
		expect(slugify('Tab 1')).toBe('tab-1');
		expect(slugify("Tab's 1")).toBe('tabs-1');
		expect(slugify('Tab-!1')).toBe('tab-1');
		expect(slugify('Tab$1')).toBe('tab1');
	});
});
