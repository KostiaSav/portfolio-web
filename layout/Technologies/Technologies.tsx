import Technology from '@/components/Technology/Technology';
import Title from '@/ul/Title/Title';
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
		<section className='technologies py-12 md:py-24'>
			<div className='container'>
				<div className='text-center mb-10 md:mb-12'>
					<Title>Technologies I Use</Title>
					<p className='text-gray-500 max-w-lg mx-auto'>
						Tools and languages I rely on to build fast, modern, and
						maintainable web products.
					</p>
				</div>
				<div
					className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4'
					data-aos='fade-up'
				>
					{techs.map(tech => (
						<Technology
							key={tech.title}
							title={tech.title}
							image={tech.image}
							color={tech.color}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
