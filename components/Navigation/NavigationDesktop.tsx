import { FaTelegramPlane, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';

const NavigationDesktop: React.FC = (props) => {

	const line1 = useRef();

	const onMenuButtonHover = () => {

	}

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
					<svg
						className='cursor-pointer'
						viewBox='0 0 100 100'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line
							className='smooth-svg-transform'
							x1='50'
							y1='40'
							x2='100'
							y2='40'
							stroke='black'
							strokeWidth={5}
						/>
						<line
							className='smooth-svg-transform'
							x1='0'
							y1='60'
							x2='100'
							y2='60'
							stroke='black'
							strokeWidth={5}
						/>
					</svg>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationDesktop;
