import React from 'react';
import TitleProps from './Title.props';

const Title = ({ children }: TitleProps) => {
	return <h2 className='text-4xl font-bold mt-5 mb-6'>{children}</h2>;
};

export default Title;
