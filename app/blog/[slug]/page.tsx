import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogToc from '@/components/BlogToc/BlogToc';
import Cta from '@/layout/Cta/Cta';
import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';
import posts from '@/mock/blog.json';

export function generateStaticParams() {
	return posts.map(post => ({ slug: post.id }));
}

const formatDate = (date: string) =>
	new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});

export default async function BlogPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = posts.find(item => item.id === slug);

	if (!post) {
		notFound();
	}

	const otherPosts = posts.filter(item => item.id !== post.id).slice(0, 3);

	return (
		<>
			<Header />
			<main>
				<article className='blog-post relative isolate overflow-x-clip'>
					<div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-160'>
						<div className='hero__grid absolute inset-0'></div>
						<div className='absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#4f6a9f] opacity-20 blur-3xl'></div>
						<div className='absolute top-20 -right-24 h-96 w-96 rounded-full bg-sky-400 opacity-15 blur-3xl'></div>
					</div>

					<div className='container'>
						{/* Post header */}
						<header className='mx-auto max-w-3xl pt-10 md:pt-16 text-center'>
							<Link
								href='/blog'
								className='inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900'
							>
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									aria-hidden='true'
								>
									<line x1='19' y1='12' x2='5' y2='12' />
									<polyline points='12 19 5 12 12 5' />
								</svg>
								Back to blog
							</Link>

							<div className='mt-6'>
								<span className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur'>
									<span className='h-2 w-2 rounded-full bg-sky-500'></span>
									{post.category}
								</span>
							</div>

							<h1 className='mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900'>
								{post.title}
							</h1>

							<p className='mt-5 text-lg text-slate-600'>{post.excerpt}</p>

							<div className='mt-6 flex items-center justify-center gap-3 text-sm text-slate-500'>
								<time dateTime={post.date}>{formatDate(post.date)}</time>
								<span className='h-1 w-1 rounded-full bg-slate-300'></span>
								<span>{post.readTime} min read</span>
							</div>
						</header>

						{/* Cover */}
						<div className='relative mx-auto mt-10 md:mt-14 aspect-video max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10'>
							<Image
								src={post.image}
								alt={post.title}
								fill
								priority
								sizes='(min-width: 1024px) 1024px, 100vw'
								className='object-cover'
							/>
						</div>

						{/* Content + sidebar */}
						<div className='mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-16'>
							<div className='blog-post__content order-2 lg:order-1 max-w-none lg:max-w-3xl'>
								{post.sections.map(section => (
									<section key={section.id} id={section.id}>
										<h2>{section.title}</h2>
										{section.content.map((paragraph, index) => (
											<p key={index}>{paragraph}</p>
										))}
									</section>
								))}
							</div>

							<aside className='order-1 lg:order-2'>
								<div className='lg:sticky lg:top-28 flex flex-col gap-6'>
									<div className='rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur'>
										<BlogToc
											items={post.sections.map(({ id, title }) => ({
												id,
												title,
											}))}
										/>
									</div>

									{otherPosts.length > 0 && (
										<div className='hidden lg:block rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur'>
											<p className='text-xs font-semibold uppercase tracking-widest text-slate-400'>
												More articles
											</p>
											<ul className='mt-4 flex flex-col gap-4'>
												{otherPosts.map(item => (
													<li key={item.id}>
														<Link
															href={`/blog/${item.id}`}
															className='group flex items-center gap-3'
														>
															<div className='relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-100'>
																<Image
																	src={item.image}
																	alt=''
																	fill
																	sizes='56px'
																	className='object-cover transition-transform duration-300 group-hover:scale-110'
																/>
															</div>
															<div className='min-w-0'>
																<p className='line-clamp-2 text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#4f6a9f]'>
																	{item.title}
																</p>
																<p className='mt-1 text-xs text-slate-400'>
																	{item.readTime} min read
																</p>
															</div>
														</Link>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</aside>
						</div>
					</div>
				</article>

				<Cta isBtnViewProject={false} />
			</main>
			<Footer />
		</>
	);
}
