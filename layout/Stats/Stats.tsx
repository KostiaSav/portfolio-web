const statItems = [
	{
		value: '100+',
		label: 'Projects Completed',
		icon: (
			<svg
				width='28'
				height='28'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<rect x='2' y='3' width='20' height='14' rx='2' />
				<polyline points='8 21 12 17 16 21' />
				<path d='M7 8h10M7 12h6' />
			</svg>
		),
	},
	{
		value: '50+',
		label: 'Happy Clients',
		icon: (
			<svg
				width='28'
				height='28'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
				<circle cx='9' cy='7' r='4' />
				<path d='M23 21v-2a4 4 0 0 0-3-3.87' />
				<path d='M16 3.13a4 4 0 0 1 0 7.75' />
			</svg>
		),
	},
	{
		value: '5+',
		label: 'Years of Experience',
		icon: (
			<svg
				width='28'
				height='28'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
				<line x1='16' y1='2' x2='16' y2='6' />
				<line x1='8' y1='2' x2='8' y2='6' />
				<line x1='3' y1='10' x2='21' y2='10' />
			</svg>
		),
	},
	{
		value: '20+',
		label: 'Technologies Used',
		icon: (
			<svg
				width='28'
				height='28'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<polyline points='16 18 22 12 16 6' />
				<polyline points='8 6 2 12 8 18' />
				<line x1='12' y1='2' x2='12' y2='22' />
			</svg>
		),
	},
];

const Stats = () => {
	return (
		<section className='stats bg-gr text-white'>
			<div className='container'>
				<div className='stats__list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-12'>
					{statItems.map((item, index) => (
						<div
							key={item.label}
							className='stats__item flex flex-col items-center gap-3'
							data-aos='fade-up'
							data-aos-delay={index * 100}
						>
							<div className='flex gap-2 items-end'>
								<div className='text-white'>{item.icon}</div>
								<h3 className='text-3xl font-bold'>{item.value}</h3>
							</div>
							<p className='text-sm text-white/60'>{item.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
