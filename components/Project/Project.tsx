import Badge from '@/ul/Badge/Badge';
import Image from 'next/image';
import React from 'react';
import ProjectProps from './Project.props';

const Project = ({
	title = 'Project',
	description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ut culpa',
	image = 'https://cdn.dribbble.com/userupload/15027788/file/original-e93b82e2b7306a74b1cede231c667117.png?resize=400x0',
	href = 'https://www.fiverr.com/users/kostya_prodan/portfolio',
	badgesList = [
		{ text: 'HTML', bgColor: '#e34f26' },
		{ text: 'CSS', bgColor: '#264de4' },
		{ text: 'JavaScript', bgColor: '#f0b429' },
		{ text: 'WordPress', bgColor: '#21759b' },
	],
}: ProjectProps) => {
	return (
		<div className='project group relative h-95 sm:h-110 lg:h-125 flex flex-col justify-between rounded-[8px] overflow-hidden'>
			<div className='project__badges flex gap-2 relative z-20 px-4 py-6 sm:px-5 sm:py-8 flex-wrap'>
				{badgesList.map((badge, key) => {
					return <Badge text={badge.text} bgColor={badge.bgColor} key={key} />;
				})}
			</div>
			<Image
				src={image}
				alt={title}
				width={400}
				height={500}
				className='w-full h-[500px] object-cover absolute left-0 top-0 rounded-[8px]'
			/>
			<div className='absolute inset-0 z-20 flex items-center justify-center gap-4 pointer-events-none'>
				<a
					href={image}
					target='_blank'
					rel='noopener noreferrer'
					className='project__action w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white pointer-events-auto opacity-0 translate-y-3 scale-90 transition-all duration-300 hover:bg-white/25 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
					style={{ transitionDelay: '0ms' }}
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<circle cx='11' cy='11' r='8' />
						<line x1='21' y1='21' x2='16.65' y2='16.65' />
						<line x1='11' y1='8' x2='11' y2='14' />
						<line x1='8' y1='11' x2='14' y2='11' />
					</svg>
				</a>
				<a
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className='project__action w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white pointer-events-auto opacity-0 translate-y-3 scale-90 transition-all duration-300 hover:bg-white/25 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
					style={{ transitionDelay: '75ms' }}
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
						<polyline points='15 3 21 3 21 9' />
						<line x1='10' y1='14' x2='21' y2='3' />
					</svg>
				</a>
			</div>
			<div className='project__body relative z-20 text-white p-5'>
				<h3 className='text-2xl font-bold mb-1'>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Project;
