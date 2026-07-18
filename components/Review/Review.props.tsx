export default interface ReviewProps {
	name?: string;
	position?: string;
	content?: string;
	avatarLink?: string;
	platformImageLink?: string | null;
	platform?: 'fiverr' | 'freelancehunt';
}
