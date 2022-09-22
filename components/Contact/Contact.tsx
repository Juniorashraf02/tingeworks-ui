import { FiArrowUpRight } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';

function Contact() {
	return (
		<div className='my-12 mx-auto'>
			<p className=' text-gray-200 md:text-9xl text-4xl h-5 font-black uppercase text-center md:h-20'>
				ask anything
			</p>
			<h1
				className='text-4xl uppercase text-center font-semibold text-slate-800 font-sans
            '
			>
				Contact
			</h1>
			<p className='text-center uppercase text-slate-700 font-light'>
				From stupid to technically creative, we are here to answer all
				the question you have.
			</p>

			<div className='flex flex-col mx-auto w-full'>
				<div className='md:flex justify-around gap-10 mx-auto p-5'>
					<div>
						<div className='my-8 w-full'>
							<input
								type='text'
								className='border-0 focus:border-0 border-white outline-none bg-transparent w-72'
								placeholder='Name'
							/>
							<hr />
						</div>
						<div className='my-8'>
							<div className='flex justify-between w-full'>
								<input
									type='text'
									className='border-0 focus:border-0 border-white outline-none bg-transparent w-72'
									placeholder='What are you interested in'
								/>
								<HiChevronDown className='text-gray-400' />
							</div>
							<hr />
						</div>
					</div>

					<div>
						<div className='my-8 w-full'>
							<input
								type='text'
								className='border-0 focus:border-0 border-white outline-none bg-transparent w-72'
								placeholder='Email'
							/>
							<hr />
						</div>
						<div className='my-8'>
							<div className='flex justify-between w-full'>
								<input
									type='text'
									className='border-0 focus:border-0 border-white outline-none bg-transparent w-72'
									placeholder='Project budget'
								/>
								<HiChevronDown className='text-gray-400' />
							</div>
							<hr />
						</div>
					</div>
				</div>

				<div className='md:w-6/12 w-10/12 md:px-3 px-2 mx-auto'>
					<input
						type='text'
						className='border-0 focus:border-0 border-white outline-none bg-transparent w-full'
						placeholder='message'
					/>
					<hr />
				</div>

				<button className='md:w-48 mx-auto text-center my-5 md:px-6 px-2 py-2.5 ring-1 ring-gray-500 text-gray-500 text-xs leading-tight rounded-md shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:text-white focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-300 ease-in-out flex items-center'>
					<p className='mx-auto'>Just send </p>
					<FiArrowUpRight className='text-xl' />
				</button>
				<p className='text-xs text-gray-400 text-center'>
					Prefer email? hello@tingeworks.com
				</p>
			</div>
		</div>
	);
}

export default Contact;
