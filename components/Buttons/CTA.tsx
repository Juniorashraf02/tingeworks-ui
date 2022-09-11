export default function CTA(props: any) {
	return (
		<button
			className={` transition-all hover:scale-105 bg-pinkblood text-white px-16 rounded py-3 hover:shadow-xl hover:shadow-pinkblood ${props.className}`}
			onClick={props.onClick}
			type={props.type}
		>
			{props.children}
		</button>
	);
}
