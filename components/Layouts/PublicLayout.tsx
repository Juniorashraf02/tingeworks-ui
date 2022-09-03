import { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';

interface props {
	title?: string;
	tagline?: string;
	description?: string;
	children?: React.ReactNode;
}

const PublicLayout: NextPage<props> = ({ title, description, children }) => {
	return (
		<PublicLayout>
			<Navigation />
		</PublicLayout>
	);
};

export default PublicLayout;
