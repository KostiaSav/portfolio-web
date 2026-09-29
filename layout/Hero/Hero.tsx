import Button from '@/ul/Button/Button';
import Image from 'next/image';
import React from 'react';

const techStack = [
	{ text: 'HTML', color: '#e34f26' },
	{ text: 'CSS', color: '#264de4' },
	{ text: 'JavaScript', color: '#f0b429' },
	{ text: 'TypeScript', color: '#3178c6' },
	{ text: 'React', color: '#149eca' },
	{ text: 'Next.js', color: '#000000' },
	{ text: 'Tailwind', color: '#06b6d4' },
	{ text: 'Webflow', color: '#146ef5' },
	{ text: 'Shopify', color: '#95bf47' },
	{ text: 'Framer', color: '#0055ff' },
];

const Hero = () => {
	return (
		<section className='hero relative isolate overflow-hidden'>
			{/* Background: grid + glows */}
			<div className='hero__bg pointer-events-none absolute inset-0 -z-10'>
				<div className='hero__grid absolute inset-0'></div>
				<div className='absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#4f6a9f] opacity-25 blur-3xl'></div>
				<div className='absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-sky-400 opacity-20 blur-3xl'></div>
			</div>

			<div className='container'>
				<div className='hero__wrapper py-12 md:py-24 grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 grid items-center'>
					<div
						className='hero__content order-2 md:order-1 text-center md:text-left'
						data-aos='fade-right'
					>
						<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur'>
							<span className='relative flex h-2.5 w-2.5'>
								<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
								<span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500'></span>
							</span>
							Available for new projects
						</span>

						<h1 className='mt-6 text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900'>
							Building modern{' '}
							<span className='bg-linear-to-r from-[#304363] via-[#4f6a9f] to-sky-500 bg-clip-text text-transparent'>
								web experiences
							</span>
						</h1>

						<p className='mt-5 md:mt-6 text-lg text-slate-600 max-w-xl mx-auto md:mx-0'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Praesentium atque, laboriosam repellendus minima nisi quae quam
							nobis doloribus commodi ratione tempora.
						</p>

						<div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
							<Button href='#projects' classes='justify-center'>
								View All Projects
							</Button>
							<Button
								href='#contact'
								type='secondary'
								classes='justify-center'
							>
								Contact Me
							</Button>
						</div>

						<div className='mt-10 flex flex-wrap items-center gap-2 justify-center md:justify-start'>
							<span className='text-xs font-semibold uppercase tracking-widest text-slate-400 mr-1'>
								Tech stack
							</span>
							{techStack.map(tech => (
								<span
									key={tech.text}
									className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm font-semibold text-slate-700 backdrop-blur'
								>
									<span
										className='h-2 w-2 rounded-full'
										style={{ backgroundColor: tech.color }}
									></span>
									{tech.text}
								</span>
							))}
						</div>
					</div>

					<div
						className='hero__image flex justify-center items-center order-1 md:order-2'
						data-aos='fade-left'
						data-aos-delay='150'
					>
						<div className='relative'>
							{/* Rotating gradient ring */}
							<div className='hero__ring absolute -inset-3 rounded-full opacity-70 blur-sm'></div>
							<div className='absolute -inset-10 rounded-full bg-[#4f6a9f] opacity-20 blur-3xl'></div>

							<Image
								src='/hero.png'
								alt='Prodan Konstantin'
								width={380}
								height={380}
								priority
								className='relative w-56 h-56 md:w-96 md:h-96 rounded-full object-cover shadow-2xl ring-8 ring-white bg-gr'
							/>

							{/* Floating cards */}
							<div className='hero__float absolute -left-6 md:-left-12 top-6 md:top-12 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-3 py-2 md:px-4 md:py-3 shadow-xl backdrop-blur-md'>
								<span className='text-xl md:text-2xl font-extrabold text-slate-900'>
									5+
								</span>
								<span className='text-xs leading-tight text-slate-500'>
									Years of
									<br />
									experience
								</span>
							</div>
							<div className='hero__float hero__float--delay absolute -right-4 md:-right-8 bottom-6 md:bottom-14 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-3 py-2 md:px-4 md:py-3 shadow-xl backdrop-blur-md'>
								<span className='text-xl md:text-2xl font-extrabold text-slate-900'>
									100+
								</span>
								<span className='text-xs leading-tight text-slate-500'>
									Projects
									<br />
									completed
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
