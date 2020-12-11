import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { Tabs } from './Tabs';

jest.mock('next/router');

describe('Tabs Component', () => {
	const component = (defaultProps) => (
		<Tabs {...defaultProps}>
			<div label='Tab 1'>
				<h2>Title Tab 1</h2>
				<p>something</p>
			</div>
			<div label='Tab 2'>
				<h2>Title Tab 2</h2>
				<p>another thing</p>
			</div>
			<div label='Tab 3'>
				<h2>Title Tab 3</h2>
				<p>hello world</p>
			</div>
		</Tabs>
	);
	beforeEach(() => {
		useRouter.mockReturnValue({
			push: jest.fn(),
		});
	});
	//Test ##################################################
	it('should match snapshot for Tabs', () => {
		const { container } = render(component({ initialTab: 'tab-3' }));
		expect(container).toMatchSnapshot();
	});
	//Test ##################################################
	it('should render the component without crash', () => {
		const { container } = render(component({ initialTab: 'tab-3' }));
		expect(container).toBeInTheDocument();
	});
	//Test ##################################################
	it('should default to the first tab content', () => {
		render(component(undefined));
		const pEl = screen.getByTestId('tab-content-tab-1').querySelector('p');
		expect(pEl.textContent).toBe('something');
	});
	//Test ##################################################
	it('should set a different tab as initial state', () => {
		render(component({ initialTab: 'tab-2' }));
		const h2El = screen.getByTestId('tab-content-tab-2').querySelector('h2');
		expect(h2El.textContent).not.toBe('Title Tab 1');
		expect(h2El.textContent).toBe('Title Tab 2');
	});
	//Test ##################################################
	it('should click a different tab and display the correct content', () => {
		render(component({ initialTab: 'tab-2' }));

		fireEvent.click(screen.getByTestId('anchor-tab-1'));
		const h2El = screen.getByTestId('tab-content-tab-1').querySelector('h2');

		expect(h2El.textContent).not.toBe('Title Tab 2');
		expect(h2El.textContent).toBe('Title Tab 1');
	});
});
