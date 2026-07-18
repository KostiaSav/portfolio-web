import Image from 'next/image';
import './Review.css';
import ReviewProps from './Review.props';

const Review = ({
	name = 'John Doe',
	position = 'FIVERR Client',
	content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum',
	avatarLink = '/john.jpg',
	platformImageLink = '/fiverr.png',
	platform = 'fiverr',
}: ReviewProps) => {
	return (
		<div className='reviews__item text-white backdrop-blur-sm flex flex-col'>
			<div className='reviews__item__quote'>&ldquo;</div>
			<div className='reviews__item__stars'>
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						width='14'
						height='14'
						viewBox='0 0 24 24'
						fill='currentColor'
					>
						<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
					</svg>
				))}
			</div>
			<p className='text-sm leading-relaxed text-white/80 mb-6'>{content}</p>
			<div className='reviews__item__bottom flex items-center justify-between mt-auto pt-2 border-t'>
				<div className='reviews__item__left flex items-center gap-3'>
					<Image
						src={avatarLink}
						alt='John Doe'
						width={46}
						height={46}
						className='reviews__item-image'
					/>
					<div className='reviews__item__user__info'>
						<h3 className='font-semibold text-sm'>{name}</h3>
						<p className='text-xs text-white/50 mt-0.5'>{position}</p>
					</div>
				</div>
				<div className='reviews__item__right opacity-70'>
					{platform === 'freelancehunt' || !platformImageLink ? (
						<span className='reviews__item-logo-text'>
							freelance<strong>hunt</strong>
						</span>
					) : (
						<Image
							src={platformImageLink}
							alt='fiverr'
							width={72}
							height={28}
							className='reviews__item-image-f'
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Review;
