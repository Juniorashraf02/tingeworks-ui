import type { NextPage } from 'next';
import Head from 'next/head';
import Article from '../../components/Article/Article';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import PublicLayout from '../../components/Layouts/PublicLayout';
import Navigation from '../../components/Navigation/Navigation';
import CTA from '../../components/Buttons/CTA';
import NavigationButton from '../../components/Buttons/NavigationButton';
import ButtonGroup from '../../components/Buttons/ButtonGroup';
import Button from './../../components/Buttons/Button';

const Blogs: NextPage = () => {
	return (
		<PublicLayout>
			<Head>
				<title>tingeworks - Blogs</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>




			<div className='mx-auto container px-5 lg:px-10 text-londonstreet bg-slate-100'>
				<div className='flex flex-col lg:flex-row items-center py-20 mt-10'>
					<div className='flex-1 p-2'>
						<h1 className='text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-black'>
							All our findings and announcements
			  			</h1>
						<p className='pt-4 text-base lg:text-xl text-gray-400 font-light'>
							Announcements, Jobs, Stories, etc.
						</p>
					</div>
					<div className='flex-1'></div>
				</div>
			</div>

			<ButtonGroup>
				<Button
				types="Pill"
				url='/blog'
				text="All"
				></Button>
				<Button
				types="Pill"
				url='/blog'
				text="Announcements"
				></Button>
				<Button
				types="Pill"
				url='/blog'
				text="Articles"
				></Button>
				<Button
				types="Pill"
				url='/blog'
				text="Jobs"
				></Button>
			</ButtonGroup>

			<div className='container mx-auto px-5 lg:px-10 py-10 mb-32'>
				<div className='grid md:grid-cols-2 gap-10'>
					<Article
						src='/f.png'
						title='UIUX is hard know why'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
						alt='ks'
					/>

					<Article
						src='/f.png'
						title='This is tittle 2'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'
						alt='ks'
					/>
				</div>
			</div>

			<Contact />
			<Footer />
		</PublicLayout>
	);
};

export default Blogs;
