import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PublicLayout from '../components/Layouts/PublicLayout';
import Navigation from '../components/Navigation/Navigation';

const Home: NextPage = () => {
	return (
		<PublicLayout>
			<Head>
				<title>tingeworks - The Web &amp; Native Factory</title>
			</Head>
		</PublicLayout>
	);
};

export default Home;
