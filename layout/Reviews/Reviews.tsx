import Review from '@/components/Review/Review';
import Title from '@/ul/Title/Title';
import reviews from '@/mock/reviews.json';

const Reviews = () => {
	return (
		<section className='reviews py-14 md:py-20 bg-gr text-white mt-16 md:mt-24'>
			<div className='container'>
				<Title>Reviews</Title>
				<div className='reviews__grid'>
					<div
						className='reviews__items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
						data-aos='fade-up'
					>
						{reviews.map((review) => (
							<Review
								key={review.id}
								name={review.name}
								position={review.position}
								content={review.content}
								avatarLink={review.avatarLink}
								platformImageLink={review.platformImageLink}
								platform={review.platform as 'fiverr' | 'freelancehunt'}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
