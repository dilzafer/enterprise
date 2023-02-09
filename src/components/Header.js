import React from "react";

function Header() {
	return (
		<header className='lg:py-24 py-5'>
			<div className='container mx-auto lg:px-10 px-5'>
				<h1 className='lg:text-5xl text-4xl  tracking-1 font-bold font-Source text-mainClr lg:mb-7 mb-5'>
					Enabling Institutions to <br className='md:block hidden' />
					Trade on News
				</h1>
				<p className='lg:text-subMainClr text-[#122F89] font-RoBo font-normal md:text-base text-sm mb-8'>
					Advanced ML-based event taxonomy dashboard for{" "}
					<br className='md:block hidden' />
					institutional investors. Built for traders, by traders.
				</p>
				<div className='flex items-center justify-center'>
					<div className='relative'>
						<input
							type='text'
							placeholder='Email address'
							className='sm:w-[430px] w-full  h-[60px] pl-6 pr-48 border-2 !outline-none border-gray-300 lg:rounded-2xl rounded-xl'
						/>

						<div className='absolute top-1/2  right-[6px]  -translate-y-1/2'>
							<button className='text-white font-Source font-bold text-base  bg-buton  py-3 px-10 rounded-[10px]'>
								Join Waitlist
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
