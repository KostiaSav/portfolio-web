import React from 'react';
import BadgeProps from './Badge.props';

const Badge = ({ text, bgColor }: BadgeProps) => {
	return (
		<span
			className='py-1 px-3 font-bold text-white rounded-md'
			style={{ backgroundColor: bgColor || '#111827' }}
		>
			{text}
		</span>
	);
};

export default Badge;
