import React from 'react';
import AdminStatProps from './Stat.props';
import Link from 'next/link';
import './Stat.css';

const Stat = ({
	value,
	title,
	isLink = false,
	link = '#',
	bg = '#0f172a',
	icon,
	accent = '#3b82f6',
}: AdminStatProps) => {
	return (
		<div className='admin-stat' style={{ background: bg ?? '#0f172a' }}>
			<div className='admin-stat__accent' style={{ background: accent }} />

			<div className='admin-stat__top'>
				{icon && (
					<span
						className='admin-stat__icon'
						style={{ background: `${accent}22`, color: accent }}
					>
						{icon}
					</span>
				)}
			</div>

			<h3 className='admin-stat__value'>{value}</h3>

			{isLink ? (
				<Link className='admin-stat__title admin-stat__title--link' href={link}>
					{title}
				</Link>
			) : (
				<p className='admin-stat__title'>{title}</p>
			)}
		</div>
	);
};

export default Stat;
