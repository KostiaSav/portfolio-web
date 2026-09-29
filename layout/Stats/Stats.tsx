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
		<section className='stats py-6 md:py-10'>
			<div className='container'>
				<div className='stats__panel relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-[#304363] to-[#4f6a9f] text-white shadow-2xl shadow-slate-900/20'>
					<div className='stats__grid pointer-events-none absolute inset-0 -z-10'></div>
					<div className='pointer-events-none absolute -top-24 -right-16 -z-10 h-72 w-72 rounded-full bg-sky-400 opacity-25 blur-3xl'></div>
					<div className='pointer-events-none absolute -bottom-24 -left-16 -z-10 h-72 w-72 rounded-full bg-indigo-400 opacity-20 blur-3xl'></div>

					<div className='stats__list grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10'>
						{statItems.map((item, index) => (
							<div
								key={item.label}
								className='stats__item group flex flex-col items-center md:items-center gap-2 bg-slate-900/40 px-5 py-8 md:px-8 md:py-10 text-center md:text-left transition-colors duration-300 hover:bg-white/5'
								data-aos='fade-up'
								data-aos-delay={index * 100}
							>
								<div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sky-300 backdrop-blur transition-transform duration-300 group-hover:-translate-y-1'>
									{item.icon}
								</div>
								<div>
									<h3 className='bg-linear-to-r text-center from-white to-sky-200 bg-clip-text text-4xl md:text-5xl font-extrabold tracking-tight text-transparent'>
										{item.value}
									</h3>
									<p className='mt-1 text-center text-sm font-medium text-white/60'>
										{item.label}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
