import React from "react";

function Footer() {
	return (
		<footer className='bg-white pt-20 pb-8'>
			<div className='container mx-auto lg:px-10 px-5'>
				<div className='flex justify-between items-center lg:flex-row flex-col'>
					<div>
						<img
							src='../assets/logo-text-v2 2.png'
							alt='logo'
							className='w-[150px]'
						/>
						<div className='lg:mt-32 mt-14 lg:text-start text-center mb-5 lg:mb-0'>
							<h4 className='text-ftrTitle lg:text-29 text-2xl lg:leading-23 leading-8 font-bold font-Source'>
								Be a smarter, better informed investor
							</h4>
							<p className='text-sm font-Source font-normal text-ftrSub mt-4'>
								Also see our retail products{" "}
								<a target='_blank' href='https://www.arcafeed.com/'>
									@ www.arcafeed.com.
								</a>
							</p>
						</div>
					</div>
					<div className='lg:text-start text-center'>
						<h4 className='text-ftrTitle text-19 leading-23 font-black font-Source mb-6'>
							Contact us
						</h4>
						<ul>
							<li className='lg:mb-[50px] mb-6'>
								<a href='#!' className='text-base text-ftrSub font-normal'>
									Built with ❤️ in Boston
								</a>
							</li>
							<li>
								<a
									href='mailto:info@arcafeed.com'
									className='text-base text-ftrSub font-normal'
								>
									info@arcafeed.com
								</a>
							</li>
						</ul>
					</div>
					<div className='lg:mt-0 mt-5 lg:text-start text-center'>
						<h4 className='text-ftrTitle text-19 leading-23 font-black font-Source mb-6'>
							Social media
						</h4>
						<ul>
							<li className='mb-[10px]'>
								<a
									target='_blank'
									href='https://www.linkedin.com/company/arcafeed/?viewAsMember=true'
									className='text-base text-ftrSub font-normal'
								>
									Linkedin
								</a>
							</li>
							<li className='mb-[10px]'>
								<a
									target='_blank'
									href='https://twitter.com/arcafeed'
									className='text-base text-ftrSub font-normal'
								>
									Twitter
								</a>
							</li>
							<li className='mb-[10px]'>
								<a
									target='_blank'
									href='https://www.instagram.com/arcafeed/'
									className='text-base text-ftrSub font-normal'
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
					<div className='lg:mt-0 mt-5 lg:block hidden'>
						<a href='#'>
							<div className='border border-ftrTitle w-[99.93px] h-[99.93px] rounded-full flex items-center justify-center'>
								<img src='../assets/arrow.svg' alt='arrow' />
							</div>
						</a>
					</div>
				</div>

				<div className='border-b border-[#D8D8D8] mt-11 '></div>

				<div className='flex items-center justify-between lg:flex-row flex-col lg:mt-28 mt-7'>
					<div>
						<p className='text-xs text-ftrSub uppercase font-medium font-RoBo'>
							© 2023 Arcafeed. All rights reserved
						</p>
					</div>
					<div className='lg:mt-0 mt-5 lg:block hidden'>
						<ul className='flex items-center lg:gap-32 gap-5'>
							<li>
								<a
									href='#!'
									className='text-xs text-ftrSub uppercase font-normal'
								>
									Terms & Conditions
								</a>
							</li>
							<li>
								<a
									href='#!'
									className='text-xs text-ftrSub uppercase font-normal'
								>
									Privacy
								</a>
							</li>
							<li>
								<a
									href='#!'
									className='text-xs text-ftrSub uppercase font-normal'
								>
									Site by Arcafeed
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
