import React from 'react';
import Link from 'next/link';
import NavLinkProps from './NavLink.props';

const NavLink = (props: NavLinkProps) => {
	return (
		<li
			className={`nav__item text-[18px] opacity-80 hover:opacity-100 transition-opacity duration-300 ${props.isActive ? 'active' : ''}`}
		>
			<Link href={props.href}>{props.label}</Link>
		</li>
	);
};

export default NavLink;
