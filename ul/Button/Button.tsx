import Link from 'next/link';
import ButtonProps from './Button.props';
import './Button.css';

const Button = ({
	children,
	type = 'primary',
	href = '#',
	classes = '',
}: ButtonProps) => {
	const classesButton = `btn btn--${type} ${classes}`;
	return (
		<Link className={classesButton} href={href}>
			{children}
		</Link>
	);
};

export default Button;
