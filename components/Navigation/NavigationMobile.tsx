import { FaTelegramPlane, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';
import NavigationButton from '../Buttons/NavigationButton';

interface navItem {
	id: number;
	label: string;
	url: string;
}

interface props {
	navItems: navItem[];
}

const NavigationMobile: React.FC<props> = (props) => {
	const [menuHoverState, setMenuHoverState] = useState(false);

	return (
		<nav
			{...props}
			className={`flex bg-white lg:block justify-between items-center gap-5 pb-2`}
		>
			<div>
				<img
					className='rounded-full'
					width={60}
					height={60}
					src='/favicon.svg'
				/>
			</div>
			<ul className='flex gap-8 items-center justify-between'>
				<li className='text-pinkblood uppercase'>
					<a href='' className='flex gap-3 items-center'>
						<span className='font-bold'>Let's talk</span>
						<span className='rounded-full bg-pinkblood text-white border h-7 w-7 flex items-center justify-center'>
							<FaTelegramPlane />
						</span>
					</a>
				</li>

				<li className='w-10'>
					<NavigationButton
						onMouseLeave={() => setMenuHoverState(false)}
						onMouseEnter={() => setMenuHoverState(true)}
						hover={false}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationMobile;
