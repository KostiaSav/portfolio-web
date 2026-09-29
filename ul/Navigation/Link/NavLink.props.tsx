export default interface NavLinkProps {
	href: string;
	label: string;
	isActive?: boolean;
	onClick?: () => void;
}
