import { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import { useSpring, config } from 'react-spring';
import {useState} from 'react'

interface props {
	title?: string;
	tagline?: string;
	description?: string;
	children?: React.ReactNode;
}

const PublicLayout: NextPage<props> = ({ title, description, children }) => {
	const NavigationAnimation = useSpring({
		to: { marginTop: 0, opacity: 1 },
		from: { marginTop: -50, opacity: 0.5 },
		config: config.wobbly
	});

	return (
		<>
			<Navigation style={NavigationAnimation} />
		</>
	);
};

export default PublicLayout;
