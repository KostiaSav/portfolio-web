export default interface BlogCardProps {
	title: string;
	excerpt: string;
	image: string;
	category: string;
	date: string;
	readTime: number;
	href?: string;
	featured?: boolean;
}
