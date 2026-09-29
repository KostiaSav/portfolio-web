import Image from 'next/image';
import './Technology.css';

interface TechnologyProps {
	image?: string;
	title?: string;
	color?: string;
}

const Technology = ({ image = '/html.png', title = 'HTML', color = '#e34f26' }: TechnologyProps) => {
	return (
		<div
			className='technology'
			style={{ '--tech-color': color } as React.CSSProperties}
		>
			<div className='technology__icon'>
				<Image src={image} alt={title} width={32} height={32} />
			</div>
			<h3 className='technology__title'>{title}</h3>
		</div>
	);
};

export default Technology;
