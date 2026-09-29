'use client';

import SwitcherTheme from '@/components/SwitcherTheme/SwitcherTheme';
import Logo from '@/ul/Logo/Logo';
import NavLink from '@/ul/Navigation/Link/NavLink';
import { usePathname } from 'next/navigation';
import { useState, type MouseEvent } from 'react';
import '@/ul/Button/Button.css';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/#technology', label: 'Technology' },
	{ href: '/#reviews', label: 'Reviews' },
];

const CONTACT_ID = 'contact';

const isActiveLink = (href: string, pathname: string) => {
	if (href.includes('#')) return false;
	if (href === '/') return pathname === '/';
	return pathname.startsWith(href);
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	// Scroll to the CTA on the current page; fall back to the home page CTA
	const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
		setIsMenuOpen(false);
		const contact = document.getElementById(CONTACT_ID);
		if (!contact) return;
		event.preventDefault();
		contact.scrollIntoView({ behavior: 'smooth' });
		history.replaceState(null, '', `#${CONTACT_ID}`);
	};

	const contactButton = (
		<a
			href={`/#${CONTACT_ID}`}
			onClick={handleContactClick}
			className='btn btn--primary btn--sm'
		>
			Contact me
		</a>
	);

	return (
		<header className='sticky top-0 z-50 border-b border-white/10 bg-slate-900/85 py-5 lg:py-4 text-white shadow-lg shadow-slate-900/10 backdrop-blur-md'>
			<div className='container'>
				<div className='flex items-center justify-between gap-4'>
					<Logo />

					<nav className='header__nav hidden lg:flex items-center gap-8'>
						<ul className='nav__list flex items-center gap-6'>
							{navItems.map(item => (
								<NavLink
									key={item.href}
									{...item}
									isActive={isActiveLink(item.href, pathname)}
								/>
							))}
						</ul>
						{contactButton}
					</nav>

					<div className='lg:hidden flex items-center gap-3'>
						{contactButton}
						<button
							type='button'
							aria-label='Toggle menu'
							aria-expanded={isMenuOpen}
							onClick={() => setIsMenuOpen(prev => !prev)}
							className='flex items-center justify-center w-9 h-9 cursor-pointer'
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								{isMenuOpen ? (
									<>
										<line x1='18' y1='6' x2='6' y2='18' />
										<line x1='6' y1='6' x2='18' y2='18' />
									</>
								) : (
									<>
										<line x1='3' y1='6' x2='21' y2='6' />
										<line x1='3' y1='12' x2='21' y2='12' />
										<line x1='3' y1='18' x2='21' y2='18' />
									</>
								)}
							</svg>
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<nav className='header__nav-mobile lg:hidden mt-4 pt-4 border-t border-white/10'>
						<ul className='nav__list flex flex-col gap-4'>
							{navItems.map(item => (
								<NavLink
									key={item.href}
									{...item}
									isActive={isActiveLink(item.href, pathname)}
									onClick={() => setIsMenuOpen(false)}
								/>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
