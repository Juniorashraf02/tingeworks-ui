import { FaTelegramPlane, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';
import NavigationButton from '../Buttons/NavigationButton';
import Link from 'next/link';

interface navItem {
	id: number;
	label: string;
	url: string;
}

interface props {
	navItems: navItem[];
}

const NavigationDesktop: React.FC<props> = (props) => {
	const [menuHoverState, setMenuHoverState] = useState(false);

	return (
		<nav
			{...props}
			className={`hidden bg-white lg:flex justify-between items-center gap-5 pb-2`}
		>
			<div>
				<Link href='/'>
					<img
						className='rounded-full cursor-pointer'
						width={60}
						height={60}
						src='/favicon.svg'
					/>
				</Link>
			</div>
			<ul className='flex gap-5 uppercase text-sm'>
				{props.navItems.map((item) => (
					<li key={item.id}>
						<a href={item.url}>{item.label}</a>
					</li>
				))}
			</ul>
			<ul className='flex gap-8 items-center justify-between'>
				<li className='text-pinkblood uppercase'>
					<a href='' className='flex gap-3 items-center'>
						<span className='font-bold'>Let&apos;s talk</span>
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

export default NavigationDesktop;
