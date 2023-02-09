import React from "react";

function Workflow() {
	return (
		<>
			<section className='bg-secBgClr2 py-28'>
				<div className='container mx-auto lg:px-10 px-5'>
					<div className='flex items-center justify-between lg:flex-row flex-col gap-y-24 md:w-3/5 mx-auto gap-x-14'>
						<div className='lg:w-[400px] w-full'>
							<h2 className='font-Source font-semibold text-btText lg:text-4xl md:text-3xl text-2xl lg:leading-45 mb-4'>
								Built for your workflow
							</h2>
							<p className='text-subFnt font-RoBo font-normal lg:text-base text-sm mb-8'>
								Customize your dashboard. Filter your news bulletins by ticker.
								Derive key insights real time.
							</p>
						</div>

						<div className='lg:w-[400px] w-full'>
							<h2 className='font-Source font-semibold text-btText lg:text-4xl  text-2xl md:text-3xl lg:leading-45 mb-4'>
								Advanced sentiment analysis tools
							</h2>
							<p className='text-subFnt font-RoBo font-normal lg:text-base text-sm mb-8'>
								ML ready information. Improved sentiment analysis visualization
								methods. Generate cluster summaries.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='lg:hidden block bg-[F8FCFF] py-20'>
				<a href='#'>
					<div className='border border-ftrTitle w-[60px] h-[60px] mx-auto  rounded-full flex items-center justify-center'>
						<img
							src='../assets/arrow.svg'
							alt='arrow'
							className='w-[30.34px]'
						/>
					</div>
				</a>
			</div>
		</>
	);
}

export default Workflow;
