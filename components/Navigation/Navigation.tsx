import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import { animated } from 'react-spring';


interface props  {
	style: object;
}

const Navigation: React.FC<props> = (props) => {
	return (
		<animated.nav
			{...props}
			className='fixed top-0 left-0 right-0 container mx-auto px-5 lg:px-10 py-2'
		>
			<NavigationDesktop />
			<NavigationMobile />
		</animated.nav>
	);
};

export default Navigation;
