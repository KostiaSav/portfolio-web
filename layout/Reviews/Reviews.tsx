import Review from '@/components/Review/Review';
import reviews from '@/mock/reviews.json';

const averageRating =
	reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

const Reviews = () => {
	return (
		<section className='reviews relative isolate overflow-hidden py-14'>
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='hero__grid absolute inset-0'></div>
				<div className='absolute top-10 -left-24 h-96 w-96 rounded-full bg-[#4f6a9f] opacity-15 blur-3xl'></div>
				<div className='absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-sky-400 opacity-15 blur-3xl'></div>
			</div>

			<div className='container'>
				<div
					className='reviews__header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14 text-center md:text-left'
					data-aos='fade-up'
				>
					<div>
						<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur'>
							<span className='h-2 w-2 rounded-full bg-amber-400'></span>
							Testimonials
						</span>
						<h2 className='mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900'>
							What Clients{' '}
							<span className='bg-linear-to-r from-[#304363] via-[#4f6a9f] to-sky-500 bg-clip-text text-transparent'>
								Say
							</span>
						</h2>
						<p className='mt-4 max-w-xl text-slate-600 mx-auto md:mx-0'>
							Real feedback from clients on Fiverr and Freelancehunt.
						</p>
					</div>

					<div className='reviews__summary mx-auto md:mx-0 inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-lg shadow-slate-900/5 backdrop-blur'>
						<span className='text-4xl font-extrabold tracking-tight text-slate-900'>
							{averageRating.toFixed(1)}
						</span>
						<div className='text-left'>
							<div className='flex gap-0.5 text-amber-400'>
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='currentColor'
									>
										<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
									</svg>
								))}
							</div>
							<p className='mt-1 text-sm text-slate-500'>
								Based on {reviews.length} reviews
							</p>
						</div>
					</div>
				</div>

				<div className='reviews__items columns-1 sm:columns-2 lg:columns-3 gap-5'>
					{reviews.map((review, index) => (
						<div
							key={review.id}
							className='mb-5 break-inside-avoid'
							data-aos='fade-up'
							data-aos-delay={(index % 3) * 100}
						>
							<Review
								name={review.name}
								position={review.position}
								projectTitle={review.projectTitle}
								rating={review.rating}
								content={review.content}
								avatarLink={review.avatarLink}
								platformImageLink={review.platformImageLink}
								platform={review.platform as 'fiverr' | 'freelancehunt'}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;
