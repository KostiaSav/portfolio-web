import Image from 'next/image';
import './Technology.css';

interface TechnologyProps {
	image?: string;
	title?: string;
	color?: string;
}

const Technology = ({ image = '/html.png', title = 'HTML', color = '#e34f26' }: TechnologyProps) => {
	return (
		<div className='technology'>
			<div
				className='technology__icon'
				style={{ backgroundColor: `${color}1a` }}
			>
				<Image src={image} alt={title} width={32} height={32} />
			</div>
			<h3 className='technology__title'>{title}</h3>
		</div>
	);
};

export default Technology;
