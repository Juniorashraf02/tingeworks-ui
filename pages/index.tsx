import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ButtonGroup from '../components/Buttons/ButtonGroup';
import CTA from '../components/Buttons/CTA';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
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

			{/* About section */}
			<div className='my-12 mx-auto'>
				<p className=' text-gray-200 md:text-9xl text-4xl h-5 font-black uppercase text-center md:h-20'>
					Passionate
				</p>
				<h1
					className='text-4xl uppercase text-center font-semibold text-slate-800 font-sans
            '
				>
					About Us
				</h1>
				<div className='text-center uppercase text-slate-700 font-light'>
					<p className='md:h-0'>
						A brand studio working to mould organic ideas, into
						sleek creations We work on
			
					<br />
	
						brand identity digital storytelling, branding tools &
						importantly just love to create{' '}
				
		

				beautiful, unique designs</p>
				</div>
				<div className='my-24 text-center'>
							<CTA className="mx-auto">Get Quote</CTA>
				</div>

				<div className="flex gap-10">
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="-translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="-translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="-translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="-translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="-translate-y-10 rounded-xl"
					></Image>
					<Image
					alt="project image"
					src="/f.png"
					width="100"
					height="350"
					layout="fixed"
					className="translate-y-10 rounded-xl"
					></Image>
				</div>
			</div>

			<Contact />
			<Footer />
		</PublicLayout>
	);
};

export default Home;
