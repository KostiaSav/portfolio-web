import Button from '@/ul/Button/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 — Page Not Found',
	description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
	return (
		<section className='not-found grow flex items-center justify-center py-20'>
			<div className='container'>
				<div className='flex flex-col items-center text-center'>
					<div className='relative'>
						<span className='absolute inset-0 -z-10 blur-3xl opacity-20 bg-gr rounded-full' />
						<h1 className='text-[10rem] leading-none font-bold text-slate-800 sm:text-[12rem]'>
							404
						</h1>
					</div>

					<h2 className='mt-2 text-2xl font-bold text-slate-800 sm:text-3xl'>
						Page not found
					</h2>
					<p className='mt-4 max-w-md text-lg text-slate-500'>
						The page you&apos;re looking for doesn&apos;t exist or has been
						moved.
					</p>

					<Button href='/' classes='mt-8'>
						Back to Home
					</Button>
				</div>
			</div>
		</section>
	);
}
