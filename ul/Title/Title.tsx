import React from 'react';
import TitleProps from './Title.props';

const Title = ({ children, center, classes }: TitleProps) => {
	return (
		<h2
			className={`text-4xl font-bold mt-5 mb-6 ${center && 'text-center'} ${classes}`}
		>
			{children}
		</h2>
	);
};

export default Title;
