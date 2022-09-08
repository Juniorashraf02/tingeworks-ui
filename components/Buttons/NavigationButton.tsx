import { useSpring, animated } from 'react-spring';

export default function NavigationButton({ hover }: any) {
	const AnimatedStateLine1 = useSpring({
		x1: hover ? 0 : 50,
	});

	return (
		<svg
			className='cursor-pointer'
			viewBox='0 0 100 100'
			xmlns='http://www.w3.org/2000/svg'
		>
			{/* <animated.line  
                style={AnimatedStateLine1}
				// x1='50'
				x2='100'
				y1='40'
				y2='40'
				stroke='black'
				strokeWidth={5}
			/> */}
			<line
				className='smooth-svg-transform'
				x1='0'
				x2='100'
				y1='60'
				y2='60'
				stroke='black'
				strokeWidth={5}
			/>
		</svg>
	);
}
