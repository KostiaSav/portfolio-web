'use client';

import SocialModal from '@/components/SocialModal/SocialModal';
import Button from '@/ul/Button/Button';
import '@/ul/Button/Button.css';
import { useState } from 'react';

const Cta = ({ isBtnViewProject = true }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section id='contact' className='cta scroll-mt-16 py-14 md:py-24'>
			<div className='container'>
				<div
					className='cta__panel relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white/70 px-6 py-14 md:px-16 md:py-20 text-center shadow-xl shadow-slate-900/5 backdrop-blur'
					data-aos='zoom-in'
				>
					<div className='hero__grid pointer-events-none absolute inset-0 -z-10'></div>
					<div className='pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-xl -translate-x-1/2 rounded-full bg-[#4f6a9f] opacity-20 blur-3xl'></div>
					<div className='pointer-events-none absolute -bottom-32 -right-16 -z-10 h-72 w-72 rounded-full bg-sky-400 opacity-20 blur-3xl'></div>

					<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm'>
						<span className='relative flex h-2.5 w-2.5'>
							<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
							<span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500'></span>
						</span>
						Let&apos;s Work Together
					</span>

					<h2 className='mx-auto mt-6 max-w-3xl text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900'>
						Ready to Start{' '}
						<span className='bg-linear-to-r from-[#304363] via-[#4f6a9f] to-sky-500 bg-clip-text text-transparent'>
							Your Project?
						</span>
					</h2>

					<p className='mx-auto mt-5 max-w-2xl text-base md:text-lg text-slate-600'>
						Have an idea or need a website built from scratch? I&apos;m open to
						new projects — whether it&apos;s a landing page, an online store, or
						a complex web application. Let&apos;s discuss the details.
					</p>

					<div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
						<button
							type='button'
							className='btn btn--primary justify-center'
							onClick={() => setIsModalOpen(true)}
						>
							Contact me
						</button>
						{isBtnViewProject && (
							<Button
								href='#projects'
								type='secondary'
								classes='justify-center'
							>
								View Projects
							</Button>
						)}
					</div>
				</div>
			</div>
			<SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</section>
	);
};

export default Cta;
