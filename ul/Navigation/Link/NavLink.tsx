import React from 'react';
import Link from 'next/link';
import NavLinkProps from './NavLink.props';

const NavLink = (props: NavLinkProps) => {
	return (
		<li
			className={`nav__item text-[17px] transition-opacity duration-300 ${props.isActive ? 'active opacity-100' : 'opacity-70 hover:opacity-100'}`}
		>
			<Link
				href={props.href}
				onClick={props.onClick}
				aria-current={props.isActive ? 'page' : undefined}
				className='group relative inline-block py-1'
			>
				{props.label}
				<span
					className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-linear-to-r from-[#4f6a9f] to-sky-400 transition-transform duration-300 ${props.isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
					aria-hidden='true'
				></span>
			</Link>
		</li>
	);
};

export default NavLink;
