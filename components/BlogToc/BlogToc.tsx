'use client';

import { useEffect, useState } from 'react';

interface BlogTocProps {
	items: { id: string; title: string }[];
}

const BlogToc = ({ items }: BlogTocProps) => {
	const [activeId, setActiveId] = useState(items[0]?.id);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const visible = entries.find(entry => entry.isIntersecting);
				if (visible) setActiveId(visible.target.id);
			},
			{ rootMargin: '-100px 0px -65% 0px' },
		);

		items.forEach(item => {
			const element = document.getElementById(item.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [items]);

	return (
		<nav aria-label='Table of contents'>
			<p className='text-xs font-semibold uppercase tracking-widest text-slate-400'>
				On this page
			</p>
			<ol className='mt-4 flex flex-col border-l border-slate-200'>
				{items.map((item, index) => {
					const isActive = item.id === activeId;
					return (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								aria-current={isActive ? 'location' : undefined}
								className={`-ml-px flex gap-3 border-l-2 py-2 pl-4 text-sm transition-colors ${
									isActive
										? 'border-[#4f6a9f] font-semibold text-slate-900'
										: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800'
								}`}
							>
								<span className='tabular-nums text-slate-400'>
									{String(index + 1).padStart(2, '0')}
								</span>
								{item.title}
							</a>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default BlogToc;
