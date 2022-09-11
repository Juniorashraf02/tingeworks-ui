import { useEffect, useState } from 'react';
import { useSpring, config, animated } from 'react-spring';

export default function FloatingText(props: any) {
	const [reset, set] = useState(false);
	const [translate, setTranslate] = useState(0);

	useEffect(() => {
		setTranslate(window.innerWidth);
	}, []);

	const animProp = useSpring({
		to: { x: -translate },
		from: { x: translate / 4 },
		reset: true,
		reverse: reset,
		config: {
			duration: 50000
		},
		onRest: () => set(!reset)
	});

	return (
		<div className='overflow-x-hidden hidden lg:block'>
			<animated.div
				style={animProp}
				className='text-extra whitespace-nowrap font-black uppercase overflow-x-hidden'
			>
				<div className='relative py-5'>
					<p className='text-londonstreet'>{props.children}</p>
					<p
                        className='absolute top-6 left-2 -z-10'
						style={{
							color: 'white',
							textShadow: '2px 2px #FC2357'
						}}
					>
						{props.children}
					</p>
                    <p
                        className='absolute top-8 left-5 -z-20'
						style={{
							color: 'white',
							textShadow: '2px 2px #FC2357'
						}}
					>
						{props.children}
					</p>
				</div>
			</animated.div>
		</div>
	);
}
