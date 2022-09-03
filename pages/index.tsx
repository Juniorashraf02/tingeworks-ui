import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../components/Navigation/Navigation';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>tingeworks - The Web &amp; Native Factory</title>
			</Head>
			<Navigation />
		</>
	);
};

export default Home;
