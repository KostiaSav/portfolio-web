import Stat from '@/components/Admin/Stat/Stat';
import React from 'react';

const Stats = () => {
	return (
		<div className='flex gap-4 p-6 flex-wrap'>
			<Stat
				value='2'
				title='Projects'
				accent='#6366f1'
				icon={
					<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
						<rect x='2' y='3' width='20' height='14' rx='2' />
						<path d='M8 21h8M12 17v4' />
					</svg>
				}
			/>
			<Stat
				value='20'
				title='Reviews'
				accent='#10b981'
				icon={
					<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
						<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
					</svg>
				}
			/>
			<Stat
				value='30'
				title='Messages'
				accent='#f59e0b'
				icon={
					<svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
						<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
						<polyline points='22,6 12,13 2,6' />
					</svg>
				}
			/>
		</div>
	);
};

export default Stats;
