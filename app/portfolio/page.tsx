import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';
import Title from '@/ul/Title/Title';
import gigs from '@/mock/gigs.json';
import Gig from '@/components/Gig/Gig';
import Cta from '@/layout/Cta/Cta';

export default function Portfolio() {
	return (
		<>
			<Header />
			<main>
				<section className='portfolio-section'>
					<div className='container'>
						<Title center classes='mt-16 mb-12'>
							Portfolio
						</Title>

						<div
							className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
							data-aos='fade-up'
						>
							{gigs.map(gig => (
								<Gig
									key={gig.id}
									image={gig.image}
									title={gig.title}
									description={gig.description}
									imageCount={gig.imageCount}
									platform={gig.platform as 'fiverr' | 'wordpress'}
									isHoverFullDescription={true}
								/>
							))}
						</div>

						<Cta isBtnViewProject={false} />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
