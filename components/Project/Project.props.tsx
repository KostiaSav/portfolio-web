import BadgeProps from '@/ul/Badge/Badge.props';

export default interface ProjectProps {
	title?: string;
	description?: string;
	image?: string;
	href?: string;
	badgesList?: BadgeProps[];
}
