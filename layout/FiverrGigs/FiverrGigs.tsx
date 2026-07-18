import Gig from '@/components/Gig/Gig';
import Button from '@/ul/Button/Button';
import Title from '@/ul/Title/Title';
import gigs from '@/mock/gigs.json';

const FiverrGigs = () => {
	return (
		<section className='fiverr-gigs pt-12 md:pt-24 bg-slate-50'>
			<div className='container'>
				<div className='flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12'>
					<div>
						<div className='flex items-center gap-2 mb-3'>
							<svg width='20' height='20' viewBox='0 0 24 24' fill='#1dbf73'>
								<path d='M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.642c.05-.826.218-1.29.462-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.434zm-3.562 0h-1.656c.05-.826.218-1.29.463-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.447zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.42 16.368H8.707v-5.874H7.354v-1.56h1.353V7.57c0-1.681.786-2.57 2.23-2.57.39 0 .772.05 1.143.15v1.52c-.29-.06-.578-.09-.868-.09-.632 0-.932.31-.932.951v1.403h1.775l-.259 1.56H10.28v5.874zm4.965 0h-1.678v-7.434h1.678v7.434zm-.839-8.527c-.54 0-.978-.44-.978-.978s.438-.978.978-.978.978.44.978.978-.437.978-.978.978z' />
							</svg>
							<span className='text-sm font-semibold text-[#1dbf73]'>
								Fiverr Portfolio
							</span>
						</div>
						<Title>Work I've Done for Clients</Title>
						<p className='text-gray-500 max-w-lg'>
							Real projects delivered to real clients. Every item below is a
							completed order from my Fiverr profile.
						</p>
					</div>
					<Button
						href='https://www.fiverr.com/users/kostya_prodan/portfolio'
						type='secondary'
					>
						View all on Fiverr
					</Button>
				</div>
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
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FiverrGigs;
