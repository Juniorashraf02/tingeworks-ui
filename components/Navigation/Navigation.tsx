import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import { animated } from 'react-spring';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

interface props {
	style: object;
}

const NavItems = [
	{
		id: 0,
		label: 'Training',
		url: '/training'
	},
	{
		id: 1,
		label: 'Projects',
		url: '/projects'
	},
	{
		id: 4,
		label: 'Blog',
		url: '/blog'
	},
	{
		id: 2,
		label: 'Services',
		url: '/services'
	},
	{
		id: 3,
		label: 'About',
		url: '/about'
	}
];

const Navigation: React.FC<props> = (props) => {
	const [Navigation, setNavigation] = useState(
		<NavigationDesktop navItems={NavItems} />
	);

	useEffect(() => {
		if (window.innerWidth <= 768) {
			setNavigation(<NavigationMobile navItems={NavItems} />);
		} else {
			setNavigation(<NavigationDesktop navItems={NavItems} />);
		}
		window.onresize = function () {
			if (window.innerWidth <= 768) {
				setNavigation(<NavigationMobile navItems={NavItems} />);
			} else {
				setNavigation(<NavigationDesktop navItems={NavItems} />);
			}
		};
	});

	return (
		<animated.nav
			{...props}
			className='z-50 fixed top-0 left-0 right-0 container mx-auto px-5 lg:px-10 shadow-lg bg-white'
		>
			{Navigation}
		</animated.nav>
	);
};

export default Navigation;