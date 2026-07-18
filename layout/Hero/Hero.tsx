import Badge from '@/ul/Badge/Badge';
import Button from '@/ul/Button/Button';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero__wrapper py-8 md:py-20 grid-cols-1 md:grid-cols-2 gap-5 grid items-center'>
					<div className='hero__content order-1' data-aos='fade-right'>
						<h1 className='text-center md:text-left text-3xl md:text-6xl font-bold'>
							Portfolio
						</h1>
						<p className='text-lg mt-3 md:mt-6'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Praesentium atque, laboriosam repellendus minima nisi quae quam
							nobis doloribus commodi ratione tempora, deserunt ut adipisci.
							Dicta harum eveniet iusto quibusdam itaque.
						</p>
						<div className='flex gap-1 justify-center md:justify-start my-3 md:my-6'>
							<Badge text='React' bgColor='#149eca' />
							<Badge text='TypeScript' bgColor='#3178c6' />
							<Badge text='Next.js' bgColor='#000000' />
						</div>
						<Button href='#' classes='justify-center w-full md:w-fit'>
							View All Projects
						</Button>
					</div>
					<div
						className='hero__image flex justify-center items-center md:order-2'
						data-aos='fade-left'
						data-aos-delay='150'
					>
						<div className='relative'>
							{/* <div className='absolute -inset-4 rounded-full bg-linear-to-br from-slate-700 to-slate-500 opacity-20 blur-2xl'></div>
							<div className='absolute -inset-1 rounded-full bg-linear-to-br from-slate-300 to-slate-500 opacity-10'></div>
							<Image
								src='/john.jpg'
								alt='Prodan Konstantin'
								width={380}
								height={380}
								className='relative w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-white/10'
							/> */}
							<Image
								src='/hero.png'
								alt='Prodan Konstantin'
								width={380}
								height={380}
								className='relative w-48 h-48 md:w-96 md:h-96 rounded-full object-cover shadow-2xl ring-4 ring-white/10 bg-gr'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
