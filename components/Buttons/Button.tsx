interface props {
	children: React.ReactNode;
	type?: 'Pill' | 'Link';
	onClick?: any;
	fill?: boolean;
}

export default function Button(props: props) {
	return (
		<>
			<button
				onClick={props.onClick}
				className={`flex items-center ${
					props.fill == true && 'bg-pinkblood text-white'
				} px-5 py-1 gap-2 ${props.type == 'Pill' && 'rounded-full'}`}
			>
				{props.children}
			</button>
		</>
	);
}
