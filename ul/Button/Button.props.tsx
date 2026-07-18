export default interface ButtonProps {
	children: React.ReactNode;
	type?: 'primary' | 'secondary' | 'transparent';
	href?: string;
	classes?: string;
}
