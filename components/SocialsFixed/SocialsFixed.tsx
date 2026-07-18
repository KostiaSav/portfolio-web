import React from 'react';

const socials = [
	{
		label: 'Telegram',
		href: 'https://t.me/developerKostya',
		gradient: 'linear-gradient(135deg, #2AABEE 0%, #229ED9 100%)',
		icon: (
			<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
				<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
			</svg>
		),
	},
	{
		label: 'Fiverr',
		href: 'https://www.fiverr.com/kostya_prodan',
		gradient: 'linear-gradient(135deg, #1DBF73 0%, #19a463 100%)',
		icon: (
			<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
				<path d='M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.642c.05-.826.218-1.29.462-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.434zm-3.562 0h-1.656c.05-.826.218-1.29.463-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.447zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.42 16.368H8.707v-5.874H7.354v-1.56h1.353V7.57c0-1.681.786-2.57 2.23-2.57.39 0 .772.05 1.143.15v1.52c-.29-.06-.578-.09-.868-.09-.632 0-.932.31-.932.951v1.403h1.775l-.259 1.56H10.28v5.874zm4.965 0h-1.678v-7.434h1.678v7.434zm-.839-8.527c-.54 0-.978-.44-.978-.978s.438-.978.978-.978.978.44.978.978-.437.978-.978.978z' />
			</svg>
		),
	},
	{
		label: 'Upwork',
		href: 'https://www.upwork.com/freelancers/~0104f494f7979e5f1f?mp_source=share',
		gradient: 'linear-gradient(135deg, #6FDA44 0%, #14A800 100%)',
		icon: (
			<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
				<path d='M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z' />
			</svg>
		),
	},
	{
		label: 'Freelancehunt',
		href: 'https://freelancehunt.com/freelancer/d4kostia.html',
		gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
		icon: (
			<span className='text-white font-bold text-[13px] tracking-tight'>
				FH
			</span>
		),
	},
];

const SocialsFixed = () => {
	return (
		<div className='fixed bottom-3 right-3 md:bottom-6 md:right-6 flex flex-col gap-1 md:gap-2 z-50'>
			{socials.map(({ label, href, gradient, icon }) => (
				<a
					key={label}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={label}
					style={{ background: gradient }}
					className='w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200'
				>
					{icon}
				</a>
			))}
		</div>
	);
};

export default SocialsFixed;
