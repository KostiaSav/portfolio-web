import Logo from '@/ul/Logo/Logo';
import React from 'react';

const Header = () => {
	return (
		<header className='bg-gray-800 text-white py-3 sticky top-0 z-50 backdrop-blur-sm'>
			<div className='container'>
				<div className='flex items-center justify-between gap-4'>
					<Logo />
				</div>
			</div>
		</header>
	);
};

export default Header;
