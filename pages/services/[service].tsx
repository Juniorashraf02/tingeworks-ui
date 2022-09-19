import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'

const Service: NextPage = () => {
	const router = useRouter()
	const { blog } = router.query
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<p>Post: {blog}</p>
		</div>
	);
};

export default Service;