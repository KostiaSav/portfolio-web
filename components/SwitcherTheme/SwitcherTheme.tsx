import React from 'react';

const SunIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<circle cx='12' cy='12' r='4' />
		<line x1='12' y1='2' x2='12' y2='6' />
		<line x1='12' y1='18' x2='12' y2='22' />
		<line x1='4.93' y1='4.93' x2='7.76' y2='7.76' />
		<line x1='16.24' y1='16.24' x2='19.07' y2='19.07' />
		<line x1='2' y1='12' x2='6' y2='12' />
		<line x1='18' y1='12' x2='22' y2='12' />
		<line x1='4.93' y1='19.07' x2='7.76' y2='16.24' />
		<line x1='16.24' y1='7.76' x2='19.07' y2='4.93' />
	</svg>
);

const MoonIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='16'
		height='16'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
	</svg>
);

const SwitcherTheme = () => {
	return (
		<div className='switcher-theme flex align-items border border-amber-50 rounded-[8px] opacity-50 hover:opacity-100 transition-opacity duration-300 '>
			<button
				className='py-2 pl-4 pr-4 cursor-pointer'
				aria-label='Light theme'
			>
				<SunIcon />
			</button>
			<button
				className='py-2 pr-4 pl-4 border-l-1 border-amber-50 cursor-pointer'
				aria-label='Dark theme'
			>
				<MoonIcon />
			</button>
		</div>
	);
};

export default SwitcherTheme;
