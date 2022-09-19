export default function ButtonGroup(props: any) {
	return (
		<div className='flex gap-2 items-center mx-auto container px-5 lg:px-10 my-5'>
			{props.children}
		</div>
	);
}
