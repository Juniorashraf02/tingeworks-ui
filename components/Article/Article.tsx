import Image from 'next/image';

const Article = (props: any) => {
	return (
		<div>
			<Image src={props.src} width='854px' height='308px' alt={props.alt}></Image>
			<h1 className='text-xl font-extrabold'>{props.title}</h1>
			<p className=''>{props.description}</p>
			<button className='w-2/5 mx-auto text-center my-5 px-6 py-2.5 bg-rose-500 text-white leading-tight rounded-md shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:text-white focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-300 ease-in-out flex items-center'>
				<p className='mx-auto'>Read more</p>
			</button>
		</div>
	);
};

export default Article;
