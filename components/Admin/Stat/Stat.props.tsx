import { ReactNode } from 'react';

export default interface AdminStatProps {
	value: string;
	title: string;
	isLink?: boolean;
	link?: string;
	bg?: string;
	icon?: ReactNode;
	accent?: string;
}
