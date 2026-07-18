'use client';

import SocialModal from '@/components/SocialModal/SocialModal';
import Badge from '@/ul/Badge/Badge';
import Title from '@/ul/Title/Title';
import '@/ul/Button/Button.css';
import { useState } from 'react';

const Cta = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className='cta py-14 md:py-24'>
			<div className='container'>
				<div className='text-center' data-aos='zoom-in'>
					<Badge text="Let's Work" />
					<Title>Ready to Start Your Project?</Title>
					<p className='max-w-2xl mx-auto mb-6 text-base md:text-[18px]'>
						Have an idea or need a website built from scratch? I'm open to new
						projects — whether it's a landing page, an online store, or a complex
						web application. Let's discuss the details.
					</p>
					<button
						type='button'
						className='btn btn--primary'
						onClick={() => setIsModalOpen(true)}
					>
						Contact me
					</button>
				</div>
			</div>
			<SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
};

export default Cta;
