import React from "react";

function NavBar() {
	return (
		<nav className='py-11'>
			<div className='container mx-auto lg:px-10 px-5'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center lg:gap-4 gap-2'>
						<a href='#!' className='lg:w-[150px] w-[150px] h-auto'>
							<img src='../assets/logo-text-v2 2.png' alt='Logo' />
						</a>
						<p className='lg:text-xl tracking-widest text-xs text-black font-normal font-RoBo lg:block hidden'>
							ENTERPRISE
						</p>
					</div>
					<a
						href='https://www.arcafeed.com/'
						target='_blank'
						className='text-white font-Source font-bold lg:text-base text-sm bg-buton py-3 px-4 rounded-[10px]'
					>
						Launch Personal
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
