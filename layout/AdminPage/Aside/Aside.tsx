'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Aside.css';

const navItems = [
	{
		label: 'Dashboard',
		href: '/admin/dashboard',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<rect x='3' y='3' width='7' height='7' rx='1' />
				<rect x='14' y='3' width='7' height='7' rx='1' />
				<rect x='3' y='14' width='7' height='7' rx='1' />
				<rect x='14' y='14' width='7' height='7' rx='1' />
			</svg>
		),
	},
	{
		label: 'Hero',
		href: '/admin/dashboard/hero',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
				<polyline points='9 22 9 12 15 12 15 22' />
			</svg>
		),
	},
	{
		label: 'Projects',
		href: '/admin/dashboard/projects',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<rect x='2' y='3' width='20' height='14' rx='2' />
				<path d='M8 21h8M12 17v4' />
			</svg>
		),
	},
	{
		label: 'Technologies',
		href: '/admin/dashboard/technologies',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<polyline points='16 18 22 12 16 6' />
				<polyline points='8 6 2 12 8 18' />
			</svg>
		),
	},
	{
		label: 'How it Works',
		href: '/admin/dashboard/process',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<circle cx='12' cy='12' r='10' />
				<polyline points='12 6 12 12 16 14' />
			</svg>
		),
	},
	{
		label: 'Reviews',
		href: '/admin/dashboard/reviews',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
			</svg>
		),
	},
	{
		label: 'Socials',
		href: '/admin/dashboard/socials',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<circle cx='18' cy='5' r='3' />
				<circle cx='6' cy='12' r='3' />
				<circle cx='18' cy='19' r='3' />
				<line x1='8.59' y1='13.51' x2='15.42' y2='17.49' />
				<line x1='15.41' y1='6.51' x2='8.59' y2='10.49' />
			</svg>
		),
	},
	{
		label: 'Header',
		href: '/admin/dashboard/header',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<line x1='3' y1='6' x2='21' y2='6' />
				<line x1='3' y1='12' x2='15' y2='12' />
			</svg>
		),
	},
	{
		label: 'Footer',
		href: '/admin/dashboard/footer',
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<line x1='3' y1='12' x2='15' y2='12' />
				<line x1='3' y1='18' x2='21' y2='18' />
			</svg>
		),
	},
];

const Aside = () => {
	const pathname = usePathname();
	return (
		<aside className='aside'>
			<div className='aside__profile'>
				<div className='aside__avatar'>K</div>
				<div>
					<p className='aside__profile-name'>Kostya Prodan</p>
					<p className='aside__profile-role'>Administrator</p>
				</div>
			</div>

			<div className='aside__section-label'>Navigation</div>

			<ul className='aside__list'>
				{navItems.map(item => (
					<li key={item.label}>
						<Link
							href={item.href}
							className={`aside__link ${pathname === item.href ? 'active' : ''}`}
						>
							<span className='aside__link-icon'>{item.icon}</span>
							<span>{item.label}</span>
						</Link>
					</li>
				))}
			</ul>

			<div className='aside__footer'>
				<Link href='/admin' className='aside__logout'>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='1.8'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
						<polyline points='16 17 21 12 16 7' />
						<line x1='21' y1='12' x2='9' y2='12' />
					</svg>
					<span>Log Out</span>
				</Link>
			</div>
		</aside>
	);
};

export default Aside;
