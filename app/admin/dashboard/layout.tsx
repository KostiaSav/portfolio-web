import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
import SocialsFixed from '@/components/SocialsFixed/SocialsFixed';
import Header from '@/layout/AdminPage/Header/Header';
import Aside from '@/layout/AdminPage/Aside/Aside';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Portfolio',
	description:
		'My personal portfolio website showcasing my projects and skills.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${inter.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col font-(--font-inter)'>
				<Header />
				<div className='flex'>
					<Aside />
					{children}
				</div>
				<SocialsFixed />
			</body>
		</html>
	);
}
