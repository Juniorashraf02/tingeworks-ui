import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

const Navigation: React.FC = () => {
	return (
		<nav className='fixed top-0 left-0 right-0 container mx-auto px-5 lg:px-10 py-2'>
			<NavigationDesktop />
			<NavigationMobile />
		</nav>
	);
};

export default Navigation;
