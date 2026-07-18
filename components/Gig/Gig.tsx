import Image from 'next/image';
import './Gig.css';

interface GigProps {
	image: string;
	title: string;
	description: string;
	href?: string;
	imageCount?: number;
	platform?: 'fiverr' | 'wordpress';
}

const PlatformIcon = ({ platform }: { platform: 'fiverr' | 'wordpress' }) => {
	if (platform === 'wordpress') {
		return (
			<svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
				<path d='M21.469 6.825c.61 1.451.95 3.05.95 4.741 0 3.66-1.97 6.852-4.904 8.604l3.032-8.764c.567-1.42.756-2.556.756-3.564 0-.367-.024-.708-.068-1.017zM12.238 3.04C12.158 3.03 12.08 3 12 3c-.08 0-.157.03-.237.04 4.92.27 8.237 4.26 8.237 9.148 0 3.66-2.097 6.852-5.199 8.604l-3.032-8.764A4.73 4.73 0 0 1 12 11.98c.03 0 .06-.003.09-.004l-3.03 8.764A9.15 9.15 0 0 1 3.764 12.19C3.764 7.3 7.317 3.31 12.238 3.04zM12 21.188a9.163 9.163 0 0 1-5.07-1.528l3.376-9.76.03.097c.434.965.718 1.93.718 2.853 0 1.04-.327 2.037-.718 2.853l-1.463 4.226A9.14 9.14 0 0 0 12 21.188zm0-18.375C6.257 2.813 1.625 7.445 1.625 13.188S6.257 23.562 12 23.562s10.375-4.632 10.375-10.375S17.743 2.813 12 2.813z' />
			</svg>
		);
	}
	return (
		<svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'>
			<path d='M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.642c.05-.826.218-1.29.462-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.434zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.42 16.368H8.707v-5.874H7.354v-1.56h1.353V7.57c0-1.681.786-2.57 2.23-2.57.39 0 .772.05 1.143.15v1.52c-.29-.06-.578-.09-.868-.09-.632 0-.932.31-.932.951v1.403h1.775l-.259 1.56H10.28v5.874zm4.965 0h-1.678v-7.434h1.678v7.434zm-.839-8.527c-.54 0-.978-.44-.978-.978s.438-.978.978-.978.978.44.978.978-.437.978-.978.978z' />
		</svg>
	);
};

const Gig = ({
	image,
	title,
	description,
	href = 'https://www.fiverr.com/users/kostya_prodan/portfolio',
	imageCount = 1,
	platform = 'fiverr',
}: GigProps) => {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer' className='gig'>
			<div className='gig__image-wrap'>
				<Image src={image} alt={title} fill className='gig__image' />
				<div className='gig__badges'>
					<span className='gig__count'>
						<svg
							width='12'
							height='12'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
						>
							<rect x='3' y='3' width='18' height='18' rx='2' />
							<circle cx='8.5' cy='8.5' r='1.5' />
							<polyline points='21 15 16 10 5 21' />
						</svg>
						{imageCount}
					</span>
				</div>
			</div>
			<div className='gig__body'>
				<h3 className='gig__title'>{title}</h3>
				<p className='gig__desc'>{description}</p>
			</div>
		</a>
	);
};

export default Gig;
