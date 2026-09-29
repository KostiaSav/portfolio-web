import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';
import Title from '@/ul/Title/Title';
import posts from '@/mock/blog.json';
import BlogCard from '@/components/BlogCard/BlogCard';
import Cta from '@/layout/Cta/Cta';

export default function Blog() {
	return (
		<>
			<Header />
			<main>
				<section className='blog-section'>
					<div className='container'>
						<Title center classes='mt-16 mb-12'>
							Blog
						</Title>

						<div
							className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
							data-aos='fade-up'
						>
							{posts.map(post => (
								<div
									key={post.id}
									className={post.featured ? 'sm:col-span-2 lg:col-span-3' : ''}
								>
									<BlogCard
										title={post.title}
										excerpt={post.excerpt}
										image={post.image}
										category={post.category}
										date={post.date}
										readTime={post.readTime}
										featured={post.featured}
										href={`/blog/${post.id}`}
									/>
								</div>
							))}
						</div>

						<Cta />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
