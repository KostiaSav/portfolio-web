import Technology from '@/components/Technology/Technology';
import React from 'react';

const techs = [
	{ title: 'HTML', image: '/html.png', color: '#e34f26' },
	{ title: 'CSS', image: '/css.png', color: '#264de4' },
	{ title: 'JavaScript', image: '/javascript.png', color: '#f0b429' },
	{ title: 'TypeScript', image: '/ts.png', color: '#3178c6' },
	{ title: 'React', image: '/react.webp', color: '#61dafb' },
	{ title: 'Next.js', image: '/next.png', color: '#000000' },
	{ title: 'Vite', image: '/vite.svg', color: '#646cff' },
	{ title: 'Angular', image: '/angular.png', color: '#dd0031' },
	{ title: 'PHP', image: '/php.webp', color: '#777bb4' },
	{ title: 'Laravel', image: '/laravel.webp', color: '#ff2d20' },
	{ title: 'MySQL', image: '/mysql.webp', color: '#4479a1' },
	{ title: 'Postgresql', image: '/pg.webp', color: '#336791' },
	{ title: 'Bootstrap', image: '/bootstrap.webp', color: '#7952b3' },
	{ title: 'Tailwind', image: '/tailwind.png', color: '#06b6d4' },
	{ title: 'Wordpress', image: '/wp.webp', color: '#21759b' },
	{ title: 'Opencart', image: '/opencart.png', color: '#29abe2' },
];

const Technologies = () => {
	return (
		<section className='technologies relative isolate overflow-hidden py-12 md:py-24'>
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='hero__grid absolute inset-0'></div>
				<div className='absolute top-1/4 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full bg-[#4f6a9f] opacity-10 blur-3xl'></div>
			</div>

			<div className='container'>
				<div className='text-center mb-10 md:mb-14' data-aos='fade-up'>
					<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur'>
						<span className='h-2 w-2 rounded-full bg-indigo-500'></span>
						Tech Stack
					</span>
					<h2 className='mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900'>
						Technologies{' '}
						<span className='bg-linear-to-r from-[#304363] via-[#4f6a9f] to-sky-500 bg-clip-text text-transparent'>
							I Use
						</span>
					</h2>
					<p className='mt-4 text-slate-600 max-w-lg mx-auto'>
						Tools and languages I rely on to build fast, modern, and
						maintainable web products.
					</p>
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4'>
					{techs.map((tech, index) => (
						<div
							key={tech.title}
							data-aos='fade-up'
							data-aos-delay={(index % 8) * 50}
						>
							<Technology
								title={tech.title}
								image={tech.image}
								color={tech.color}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
