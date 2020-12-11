import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { slugify } from '@/utils/index';
import styles from './Tabs.module.css';

const Tabs = ({ children, initialTab }) => {
	const [activeTab, setActiveTab] = useState(slugify(children[0].props.label));
	const router = useRouter();

	const handleClick = (e, newActiveTab) => {
		e.preventDefault();
		setActiveTab(slugify(newActiveTab));
	};
	useEffect(() => {
		if (initialTab) setActiveTab(initialTab);
	}, []);
	useEffect(() => {
		router.push(
			{
				query: { tab: slugify(activeTab) },
			},
			undefined,
			{ shallow: true }
		);
	}, [activeTab]);

	return (
		<div>
			<ul className={styles.tabs}>
				{children.map((tab) => {
					const label = tab.props.label;

					return (
						<li
							key={label}
							className={slugify(label) === activeTab ? styles.current : ''}
							// onClick={() => setActiveTab(tab.props.label)}
						>
							<a
								href='#'
								onClick={(e) => handleClick(e, label)}
								data-testid={`anchor-${slugify(label)}`}
							>
								{label}
							</a>
						</li>
					);
				})}
			</ul>
			{children.map((tabContent) => {
				const label = slugify(tabContent.props.label);
				if (label === activeTab) {
					return (
						<div
							key={label}
							data-testid={`tab-content-${label}`}
							className={styles.content}
						>
							{tabContent.props.children}
						</div>
					);
				}
			})}
		</div>
	);
};

Tabs.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	initialTab: PropTypes.string,
};
Tabs.defaultProps = {
	initialTab: '',
};
export { Tabs };
