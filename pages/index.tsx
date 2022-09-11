import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CTA from '../components/Buttons/CTA';
import PublicLayout from '../components/Layouts/PublicLayout';
import FloatingText from '../components/Misc/FloatingText';
import Navigation from '../components/Navigation/Navigation';

const Home: NextPage = () => {
	return (
		<PublicLayout>
			<Head>
				<title>tingeworks - The Web &amp; Native Factory</title>
			</Head>
			<div className='mt-10 container mx-auto px-5 lg:px-10 text-londonstreet bg-slate-100'>
				<div className='flex flex-col lg:flex-row items-center py-32'>
					<div className='flex-1'>
						<h1 className='text-4xl lg:text-4xl xl:text-5xl font-black'>
							Web &amp; Native Application Factory
						</h1>
						<p className='pt-4 uppercase text-lg lg:text-xl'>
							We are a SEA based software design and development
							studio working with fresh minds all across the
							globe.
						</p>
						<div className='mt-5'>
							<CTA>Get Quote</CTA>
						</div>
					</div>
					<div className='flex-1'></div>
				</div>
			</div>

			<FloatingText>We are expert web engineers</FloatingText>
		</PublicLayout>
	);
};

export default Home;
