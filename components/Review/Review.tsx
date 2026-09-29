import Image from 'next/image';
import './Review.css';
import ReviewProps from './Review.props';

const Review = ({
	name = 'John Doe',
	position = 'FIVERR Client',
	projectTitle,
	rating = 5,
	content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum',
	avatarLink = '/john.jpg',
	platformImageLink = '/fiverr.png',
	platform = 'fiverr',
}: ReviewProps) => {
	const fullStars = Math.round(rating);

	return (
		<div className='reviews__item group relative flex flex-col'>
			<div className='flex items-start justify-between gap-4'>
				<div className='reviews__item__quote' aria-hidden='true'>
					<svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
						<path d='M9.5 5C6 5.9 3.5 9 3.5 12.9V19h6.5v-6.5H6.6c0-2.3 1.4-4.3 3.6-5L9.5 5Zm11 0c-3.5.9-6 4-6 7.9V19H21v-6.5h-3.4c0-2.3 1.4-4.3 3.6-5L20.5 5Z' />
					</svg>
				</div>
				<div className='reviews__item__stars' aria-label={`${rating} out of 5`}>
					{[...Array(5)].map((_, i) => (
						<svg
							key={i}
							width='15'
							height='15'
							viewBox='0 0 24 24'
							fill={i < fullStars ? 'currentColor' : 'none'}
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
						</svg>
					))}
				</div>
			</div>

			{projectTitle && (
				<span className='mt-5 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600'>
					{projectTitle}
				</span>
			)}

			<p className='mt-4 mb-6 text-[15px] leading-relaxed text-slate-700'>
				{content}
			</p>

			<div className='reviews__item__bottom flex items-center justify-between gap-3 mt-auto pt-4 border-t border-slate-100'>
				<div className='reviews__item__left flex items-center gap-3'>
					<Image
						src={avatarLink}
						alt={name}
						width={44}
						height={44}
						className='reviews__item-image'
					/>
					<div className='reviews__item__user__info'>
						<h3 className='font-semibold text-sm text-slate-900'>{name}</h3>
						<p className='text-xs text-slate-500 mt-0.5'>{position}</p>
					</div>
				</div>
				<div className='reviews__item__right opacity-80 transition-opacity group-hover:opacity-100'>
					{platform === 'freelancehunt' || !platformImageLink ? (
						<span className='reviews__item-logo-text'>
							freelance<strong>hunt</strong>
						</span>
					) : (
						<Image
							src={platformImageLink}
							alt='Fiverr'
							width={64}
							height={24}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Review;
