import Logo from '@/ul/Logo/Logo';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white'>
			<div className='footer__main py-10 md:py-12'>
				<div className='container'>
					<div className='footer__main__wrapper flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-5 justify-between'>
						<div className='flex flex-col gap-4 max-w-full sm:max-w-75'>
							<Logo />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
								ipsum dolor sit amet.
							</p>

							<div className=' flex gap-3 z-50'>
								<a
									href='https://t.me/developerKostya'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Telegram'
									className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200'
									style={{
										background:
											'linear-gradient(135deg, rgb(42, 171, 238) 0%, rgb(34, 158, 217) 100%)',
									}}
								>
									<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
										<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'></path>
									</svg>
								</a>
								<a
									href='https://www.fiverr.com/kostya_prodan'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Fiverr'
									className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200'
									style={{
										background:
											'linear-gradient(135deg, rgb(29, 191, 115) 0%, rgb(25, 164, 99) 100%)',
									}}
								>
									<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
										<path d='M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.642c.05-.826.218-1.29.462-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.434zm-3.562 0h-1.656c.05-.826.218-1.29.463-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.447zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.42 16.368H8.707v-5.874H7.354v-1.56h1.353V7.57c0-1.681.786-2.57 2.23-2.57.39 0 .772.05 1.143.15v1.52c-.29-.06-.578-.09-.868-.09-.632 0-.932.31-.932.951v1.403h1.775l-.259 1.56H10.28v5.874zm4.965 0h-1.678v-7.434h1.678v7.434zm-.839-8.527c-.54 0-.978-.44-.978-.978s.438-.978.978-.978.978.44.978.978-.437.978-.978.978z'></path>
									</svg>
								</a>
								<a
									href='https://www.upwork.com/freelancers/~0104f494f7979e5f1f?mp_source=share'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Upwork'
									className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200'
									style={{
										background:
											'linear-gradient(135deg, rgb(111, 218, 68) 0%, rgb(20, 168, 0) 100%)',
									}}
								>
									<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
										<path d='M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z'></path>
									</svg>
								</a>
								<a
									href='https://freelancehunt.com/freelancer/d4kostia.html'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Freelancehunt'
									className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200'
									style={{
										background:
											'linear-gradient(135deg, rgb(255, 152, 0) 0%, rgb(245, 124, 0) 100%)',
									}}
								>
									<span className='text-white font-bold text-[12px] tracking-tight'>
										FH
									</span>
								</a>
							</div>
						</div>
						<nav>
							<h3 className='text-lg font-bold mb-5'>Main Links</h3>
							<ul className='flex flex-col gap-4'>
								<li>
									<Link href='#'>Home</Link>
								</li>
								<li>
									<Link href='#projects'>Projects</Link>
								</li>
								<li>
									<Link href='#technology'>Technology</Link>
								</li>
								<li>
									<Link href='#reviews'>Reviews</Link>
								</li>
								<li>
									<Link href='#contact'>Contact</Link>
								</li>
							</ul>
						</nav>

						<nav>
							<h3 className='text-lg font-bold mb-5'>Freelance Links</h3>
							<ul className='flex flex-col gap-4'>
								<li>
									<Link href='https://www.fiverr.com/kostya_prodan'>
										Fiverr
									</Link>
								</li>
								<li>
									<Link href='https://www.upwork.com/freelancers/~0104f494f7979e5f1f?mp_source=share'>
										Upwork
									</Link>
								</li>
								<li>
									<Link href='https://freelancehunt.com/freelancer/d4kostia.html'>
										FreelanceHunt
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className='footer__bottom py-4 bg-gray-900'>
				<div className='container'>
					<p className='footer__text text-[14px] text-center'>
						© 2026 Portfolio. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
