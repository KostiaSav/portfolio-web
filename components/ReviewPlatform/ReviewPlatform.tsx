import Image from 'next/image';
import './ReviewPlatform.css';

interface ReviewPlatformProps {
	platform: 'fiverr' | 'freelancehunt';
	reviewCount: number;
	rating: number;
	avatar: string;
	name: string;
	level?: string;
}

const ReviewPlatform = ({
	platform,
	reviewCount,
	rating,
	avatar,
	name,
	level,
}: ReviewPlatformProps) => {
	const fullStars = Math.floor(rating);
	const maxRating = platform === 'fiverr' ? 5 : 5;

	return (
		<div className='review-platform'>
			<div className='review-platform__header'>
				{platform === 'fiverr' ? (
					<Image
						src='/fiverr.png'
						alt='Fiverr'
						width={80}
						height={28}
						className='review-platform__logo review-platform__logo--fiverr'
					/>
				) : (
					<span className='review-platform__logo-text review-platform__logo-text--fh'>
						freelance<strong>hunt</strong>
					</span>
				)}
			</div>

			<div className='review-platform__user'>
				<Image
					src={avatar}
					alt={name}
					width={48}
					height={48}
					className='review-platform__avatar'
				/>
				<div>
					<p className='review-platform__name'>{name}</p>
					{level && <p className='review-platform__level'>{level}</p>}
				</div>
			</div>

			<div className='review-platform__stats'>
				<div className='review-platform__stars'>
					{[...Array(maxRating)].map((_, i) => (
						<svg
							key={i}
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill={i < fullStars ? 'currentColor' : 'none'}
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
						</svg>
					))}
					<span className='review-platform__rating'>{rating.toFixed(1)}</span>
				</div>
				<p className='review-platform__count'>{reviewCount} reviews</p>
			</div>
		</div>
	);
};

export default ReviewPlatform;
