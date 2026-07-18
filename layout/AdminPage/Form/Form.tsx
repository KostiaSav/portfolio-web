import Button from '@/ul/Button/Button';
import React from 'react';

const Form = () => {
	return (
		<section className='admin-form min-h-screen flex items-center justify-center bg-slate-50'>
			<div className='w-full max-w-md mx-auto px-4'>
				<div className='bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden'>
					<div className='bg-gray-800 px-8 py-8 text-center'>
						<h1 className='text-xl font-bold text-white'>Admin Panel</h1>
						<p className='text-white/50 text-sm mt-1'>
							Sign in to your account
						</p>
					</div>

					<div className='px-8 py-8 flex flex-col gap-5'>
						<label className='flex flex-col gap-1.5'>
							<span className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>
								Username
							</span>
							<div className='relative'>
								<span className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'>
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
										<circle cx='12' cy='7' r='4' />
									</svg>
								</span>
								<input
									id='login'
									type='text'
									placeholder='Enter username'
									className='w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700/10 transition-all'
								/>
							</div>
						</label>

						<label className='flex flex-col gap-1.5'>
							<span className='text-xs font-semibold text-slate-500 uppercase tracking-wider'>
								Password
							</span>
							<div className='relative'>
								<span className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'>
									<svg
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
										<path d='M7 11V7a5 5 0 0 1 10 0v4' />
									</svg>
								</span>
								<input
									id='password'
									type='password'
									placeholder='Enter password'
									className='w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700/10 transition-all'
								/>
							</div>
						</label>

						<Button classes='w-full flex items-center justify-center h-12 mt-1'>
							Sign In
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Form;
