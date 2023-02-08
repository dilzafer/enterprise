import React from "react";

function ImgeSection() {
	return (
		<section className='pb-11'>
			<div className='conatiner mx-auto px-5'>
				<img
					src='../assets/file.svg'
					alt='file image'
					className='mx-auto lg:block hidden'
				/>
				<img
					src='../assets/mack.png'
					alt='file image'
					className='lg:hidden block mx-auto rounded-3xl'
				/>
			</div>
		</section>
	);
}

export default ImgeSection;
