function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className='bg-black mt-10'>
			<div className='md:grid md:grid-cols-3 grid-cols-1 gap-8'>
				<div className='text-white mx-auto md:p-10 p-2'>
					<h1 className='text-5xl font-medium text-white'>
						TingeWorks
					</h1>
					<p className='text-white font-light my-5 uppercase'>
						Presenting a landing page design for Shopify Store.
						Please share your feedback about the color choice and
						placement of the elements.
						<br className='mb-5' />
						If you like what you see, don&apos;t forget the press
						the ❤️ icon and follow me Dribbble and other social
						platforms to get exciting content and tips.
					</p>
					<p className='text-white font-light uppercase mt-24 hidden md:block mx-auto'>
						Tingeworks all right reserved {year}
					</p>

				</div>
				<div className='text-white flex md:flex-col justify-between gap-12 mx-auto mt-20 uppercase p-5'>
					<div className='flex flex-col gap-3'>
						<a href=''>services</a>
						<a href=''>projects</a>
						<a href=''>design</a>
						<a href=''>development</a>
						<a href=''>full stack</a>
					</div>
					<div className='flex flex-col gap-3'>
						<a href=''>services</a>
						<a href=''>projects</a>
						<a href=''>design</a>
						<a href=''>development</a>
						<a href=''>full stack</a>
					</div>
				</div>
				<div className='text-white flex gap-24 flex-col font-light justify-between'>
					<div className='bg-rose-500 md:px-20 md:py-24 px-5 py-20'>
						<div className="mb-2">
							<p>Subscribe us for latest updates</p>
						</div>
						<div className='flex w-11/12 justify-between '>
							<p>Email here</p>
							<a href="mailto:hello@tingeworks.com">Send</a>
						</div>
						<hr className='w-11/12' />
					</div>

					<div className='grid grid-cols-2 md:grid-cols-2 mx-auto gap-12  uppercase p-5'>
						<div className='flex flex-col gap-3'>
							<a href=''>instagram</a>
							<a href=''>twitter</a>
							<a href=''>facebook</a>
						</div>
						<div className='flex flex-col gap-3  uppercase'>
							<a href=''>carrier</a>
							<a href=''>blogs</a>
							<a href=''>contact us</a>
						</div>
					</div>
					<p className='text-white font-light uppercase mt-24 md:hidden mx-auto'>
						Tingeworks all right reserved {year}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
