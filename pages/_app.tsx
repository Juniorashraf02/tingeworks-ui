import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import FaviconLayout from '../components/SEO/FaviconLayout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<FaviconLayout>
			<Component {...pageProps} />
		</FaviconLayout>
	);
}

export default MyApp;
