import { FaTelegramPlane, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';
import NavigationButton from '../Buttons/NavigationButton';

const NavigationDesktop: React.FC = (props) => {
	

	return (
		<nav className='flex justify-between items-center'>
			<div>
				<img
					className='rounded-full'
					width={50}
					height={50}
					src='/favicon.svg'
				/>
			</div>
			<ul className='flex gap-5'>
				<li>
					<a href=''>Training</a>
				</li>

				<li>
					<a href=''>Projects</a>
				</li>

				<li>
					<a href=''>Services</a>
				</li>

				<li>
					<a href=''>About</a>
				</li>
			</ul>
			<ul className='flex gap-5 items-center justify-between'>
				<li className='text-pinkblood uppercase'>
					<a href='' className='flex gap-3 items-center'>
						<span className='font-bold'>Let's talk</span>
						<span className='rounded-full border-pinkblood border h-7 w-7 flex items-center justify-center'>
							<FaTelegramPlane />
						</span>
					</a>
				</li>

				<li className='w-10'>
					<NavigationButton hover={false} />
				</li>
			</ul>
		</nav>
	);
};

export default NavigationDesktop;
