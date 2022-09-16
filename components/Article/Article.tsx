import Image from 'next/image';
import Link from 'next/link';

const Article = (props: any) => {
	return (
		<div>
			<Image
				src={props.src}
				width='700px'
				height='350px'
				alt={props.alt}
			/>
			<div className='p-3'>
				<h1 className='text-xl font-extrabold'>{props.title}</h1>
				<p className='my-2 text-sm'>{props.description}</p>
				{/* Button will be a component */}
				{/* <Link href={props.href}>
				<a>
				<button className='md:w-2/5 mx-auto text-center my-5 px-6 py-2.5 bg-rose-500 text-white leading-tight rounded-md shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:text-white focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-300 ease-in-out flex items-center'>
				<p className='mx-auto'>Read more</p>
			</button>
				</a>
			</Link> */}
			</div>
		</div>
	);
};

export default Article;
