import { FiArrowUpRight } from 'react-icons/fi';



function Contact() {
	return (
		<div className='my-12'>
			<h1
				className='text-4xl uppercase text-center font-bold text-slate-800
            '
			>
				Contact
			</h1>
			<p className='text-center uppercase text-gray-400 font-light'>
				From stupid to technically creative, we are here to answer all
				the question you have.
			</p>
			<div className='flex flex-col justify-around w-8/12 mx-auto'>
				<div className='md:flex justify-between'>
					<div>
						<div className='my-8'>
							<input
								type='text'
								className='border-0 focus:border-0 border-white outline-none'
								placeholder='Name'
							/>
							<hr />
						</div>
						<div className='my-8'>
							<input
								type='text'
								className='border-0 focus:border-0 border-white outline-none'
								placeholder='What are you interested in'
							/>
							<hr />
						</div>
					</div>

					<div>
						<div className='my-8'>
							<input
								type='text'
								className='border-0 focus:border-0 border-white outline-none'
								placeholder='Email'
							/>
							<hr />
						</div>
						<div className='my-8'>
							<input
								type='text'
								className='border-0 focus:border-0 border-white outline-none'
								placeholder='Project budget'
							/>
							<hr />
						</div>
					</div>
				</div>
				<div className='mx-auto w-full'>
					<input
						type='text'
						className='border-0 focus:border-0 border-white w-full outline-none'
						placeholder='message'
					/>
					<hr />
				</div>
                <button className="md:w-1/5 mx-auto text-center my-5 md:px-6 px-2 py-2.5 ring-1 ring-gray-500 text-gray-500 text-xs leading-tight rounded-md shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:text-white focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <p className="mx-auto">Just send </p>
                    <FiArrowUpRight className="text-xl"/> 
                    </button>
                    <p className="text-xs text-gray-400 text-center">Prefer email? hello@tingeworks.com</p>
			</div>

		</div>
	);
}

export default Contact;
