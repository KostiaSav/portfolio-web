export default interface ReviewProps {
	name?: string;
	position?: string;
	projectTitle?: string;
	rating?: number;
	content?: string;
	avatarLink?: string;
	platformImageLink?: string | null;
	platform?: 'fiverr' | 'freelancehunt';
}
