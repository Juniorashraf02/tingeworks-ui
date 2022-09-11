import { useSpring, animated, config } from 'react-spring';
import { useState } from 'react';

export default function NavigationButton({
	hover,
	onMouseEnter,
	onMouseLeave
}: any) {
	const [state, setState] = useState([
		{
			from: {
				x: 50
			},
			x: 0,
			config: config.wobbly
		},
		{
			from: {
				x: 50
			},
			x: 50,
			config: config.wobbly
		}
	]);

	const style1 = useSpring(state[0]);
	const style2 = useSpring(state[1]);

	return (
		<svg
			onMouseEnter={() => {
				onMouseEnter();
				setState([
					{
						from: {
							x: 0
						},
						x: 30,
						config: config.wobbly
					},
					{
						from: {
							x: 0
						},
						x: 0,
						config: config.wobbly
					}
				]);
			}}
			onMouseLeave={() => {
				onMouseLeave();
				setState([
					{
						from: {
							x: 0
						},
						x: 0,
						config: config.wobbly
					},
					{
						from: {
							x: 0
						},
						x: 70,
						config: config.wobbly
					}
				]);
			}}
			className='cursor-pointer'
			viewBox='0 0 100 100'
			xmlns='http://www.w3.org/2000/svg'
		>
			<animated.line
				style={style1}
				// x1='50'
				x2='100'
				y1='40'
				y2='40'
				stroke='black'
				strokeWidth={5}
			/>

			<animated.line
				style={style2}
				x2='50'
				y1='60'
				y2='60'
				stroke='black'
				strokeWidth={5}
			/>
		</svg>
	);
}
