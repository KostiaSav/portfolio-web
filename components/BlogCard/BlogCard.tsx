import Image from 'next/image';
import Link from 'next/link';
import BlogCardProps from './BlogCard.props';
import './BlogCard.css';

const formatDate = (date: string) =>
	new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

const BlogCard = ({
	title,
	excerpt,
	image,
	category,
	date,
	readTime,
	href = '#',
	featured = false,
}: BlogCardProps) => {
	return (
		<Link
			href={href}
			className={`blog-card${featured ? ' blog-card--featured' : ''}`}
		>
			<div className='blog-card__image-wrap'>
				<Image
					src={image}
					alt={title}
					fill
					sizes={
						featured
							? '(min-width: 768px) 55vw, 100vw'
							: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
					}
					className='blog-card__image'
				/>
				<span className='blog-card__category'>{category}</span>
			</div>

			<div className='blog-card__body'>
				<div className='blog-card__meta'>
					<time dateTime={date}>{formatDate(date)}</time>
					<span className='blog-card__dot' aria-hidden='true'></span>
					<span>{readTime} min read</span>
				</div>

				<h3 className='blog-card__title'>{title}</h3>
				<p className='blog-card__excerpt'>{excerpt}</p>

				<span className='blog-card__more'>
					Read article
					<svg
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						aria-hidden='true'
					>
						<line x1='5' y1='12' x2='19' y2='12' />
						<polyline points='12 5 19 12 12 19' />
					</svg>
				</span>
			</div>
		</Link>
	);
};

export default BlogCard;
