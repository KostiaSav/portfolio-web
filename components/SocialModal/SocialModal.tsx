'use client';

import { useEffect } from 'react';

interface SocialModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const socials = [
	{
		name: 'Telegram',
		href: 'https://t.me/developerKostya',
		background: 'linear-gradient(135deg, rgb(42, 171, 238) 0%, rgb(34, 158, 217) 100%)',
		icon: (
			<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
				<path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'></path>
			</svg>
		),
	},
	{
		name: 'Fiverr',
		href: 'https://www.fiverr.com/kostya_prodan',
		background: 'linear-gradient(135deg, rgb(29, 191, 115) 0%, rgb(25, 164, 99) 100%)',
		icon: (
			<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
				<path d='M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.642c.05-.826.218-1.29.462-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.434zm-3.562 0h-1.656c.05-.826.218-1.29.463-1.29.244 0 .434.217.553.543.12.326.193.747.193 1.29h.447zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.42 16.368H8.707v-5.874H7.354v-1.56h1.353V7.57c0-1.681.786-2.57 2.23-2.57.39 0 .772.05 1.143.15v1.52c-.29-.06-.578-.09-.868-.09-.632 0-.932.31-.932.951v1.403h1.775l-.259 1.56H10.28v5.874zm4.965 0h-1.678v-7.434h1.678v7.434zm-.839-8.527c-.54 0-.978-.44-.978-.978s.438-.978.978-.978.978.44.978.978-.437.978-.978.978z'></path>
			</svg>
		),
	},
	{
		name: 'Upwork',
		href: 'https://www.upwork.com/freelancers/~0104f494f7979e5f1f?mp_source=share',
		background: 'linear-gradient(135deg, rgb(111, 218, 68) 0%, rgb(20, 168, 0) 100%)',
		icon: (
			<svg viewBox='0 0 24 24' fill='white' width='22' height='22'>
				<path d='M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z'></path>
			</svg>
		),
	},
	{
		name: 'Freelancehunt',
		href: 'https://freelancehunt.com/freelancer/d4kostia.html',
		background: 'linear-gradient(135deg, rgb(255, 152, 0) 0%, rgb(245, 124, 0) 100%)',
		icon: <span className='text-white font-bold text-[12px] tracking-tight'>FH</span>,
	},
];

const SocialModal = ({ isOpen, onClose }: SocialModalProps) => {
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm'
			role='dialog'
			aria-modal='true'
			aria-label='Contact via social networks'
			onClick={onClose}
		>
			<div
				className='relative w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 shadow-2xl'
				onClick={e => e.stopPropagation()}
			>
				<button
					type='button'
					aria-label='Close'
					onClick={onClose}
					className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer'
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<line x1='18' y1='6' x2='6' y2='18' />
						<line x1='6' y1='6' x2='18' y2='18' />
					</svg>
				</button>

				<h3 className='text-xl font-bold text-slate-800 mb-1'>Let&apos;s connect</h3>
				<p className='text-sm text-slate-500 mb-6'>
					Pick a platform and send me a message.
				</p>

				<div className='flex flex-col gap-3'>
					{socials.map(social => (
						<a
							key={social.name}
							href={social.href}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-3 rounded-xl border border-slate-200 p-3 hover:border-slate-300 hover:bg-slate-50 transition-colors'
						>
							<span
								className='w-10 h-10 shrink-0 rounded-full flex items-center justify-center'
								style={{ background: social.background }}
							>
								{social.icon}
							</span>
							<span className='font-semibold text-slate-800'>{social.name}</span>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default SocialModal;
