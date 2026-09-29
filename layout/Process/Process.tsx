import './Process.css';

const steps = [
	{
		number: '01',
		title: 'Discussion',
		description:
			'We discuss your goals, target audience, budget and timeline. I ask the right questions so nothing gets lost in translation.',
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
				<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
				<path d='M8 10h8M8 14h5' />
			</svg>
		),
	},
	{
		number: '02',
		title: 'Design',
		description:
			'I create wireframes and a visual concept. You see what the result will look like before a single line of code is written.',
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
				<rect x='3' y='3' width='18' height='18' rx='2' />
				<path d='M3 9h18M9 21V9' />
			</svg>
		),
	},
	{
		number: '03',
		title: 'Development',
		description:
			'I build the project with clean, maintainable code. Regular updates keep you in the loop at every stage.',
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
	{
		number: '04',
		title: 'Delivery',
		description:
			'The finished project is tested, deployed and handed over with full documentation. Post-launch support is included.',
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
				<path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
				<polyline points='22 4 12 14.01 9 11.01' />
			</svg>
		),
	},
];

const Process = () => {
	return (
		<section className='process pt-12 md:pt-24'>
			<div className='container'>
				<div className='text-center mb-10 md:mb-16' data-aos='fade-up'>
					<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur'>
						<span className='h-2 w-2 rounded-full bg-sky-500'></span>
						Process
					</span>
					<h2 className='mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900'>
						How I{' '}
						<span className='bg-linear-to-r from-[#304363] via-[#4f6a9f] to-sky-500 bg-clip-text text-transparent'>
							Work
						</span>
					</h2>
					<p className='mt-4 text-slate-600 max-w-xl mx-auto'>
						A clear, transparent process from the first message to the final
						result.
					</p>
				</div>
				<div className='process__steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='process__line hidden lg:block' aria-hidden='true' />
					{steps.map((step, index) => (
						<div
							key={step.number}
							className='process__step group'
							data-aos='fade-up'
							data-aos-delay={index * 100}
						>
							<span className='process__step-number' aria-hidden='true'>
								{step.number}
							</span>
							<div className='process__step-icon'>{step.icon}</div>
							<span className='process__step-label'>Step {step.number}</span>
							<h3 className='process__step-title'>{step.title}</h3>
							<p className='process__step-desc'>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Process;
