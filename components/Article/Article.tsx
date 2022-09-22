import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Buttons/Button';



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

				<Button
				url="/blog/2"
				types="Link"
				text="Read"
				></Button>
			</div>
		</div>
	);
};

export default Article;
