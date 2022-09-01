import { NextPage } from 'next';
import Head from 'next/head';

interface props {
	title?: string;
	tagline?: string;
	description?: string;
	children?: React.ReactNode;
}

const PublicLayout: NextPage<props> = ({ title, description, children }) => {
	return (
		<PublicLayout>
			
		</PublicLayout>
	);
};

export default PublicLayout;
