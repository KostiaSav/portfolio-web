import Cta from '@/layout/Cta/Cta';
import FiverrGigs from '@/layout/FiverrGigs/FiverrGigs';
import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';
import Hero from '@/layout/Hero/Hero';
import Process from '@/layout/Process/Process';
import Projects from '@/layout/Projects/Projects';
import Reviews from '@/layout/Reviews/Reviews';
import Stats from '@/layout/Stats/Stats';
import Technologies from '@/layout/Technologies/Technologies';

export default function Home() {
	return (
		<div className=''>
			<Header />
			<div id='home'>
				<Hero />
			</div>
			<Stats />
			<div id='projects'>
				<Projects />
			</div>
			<FiverrGigs />
			<Process />
			<div id='technology'>
				<Technologies />
			</div>
			<div id='reviews'>
				<Reviews />
			</div>
			<Cta />
			<Footer />
		</div>
	);
}
