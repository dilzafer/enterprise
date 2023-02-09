import React, { useState } from "react";

function Header() {
	const [formData, setFormData] = useState({
		email: "",
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const encode = (data) => {
			return Object.keys(data)
				.map(
					(key) =>
						encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
				)
				.join("&");
		};

		fetch("https://clever-lebkuchen-dbe08e.netlify.app/", {
			method: "POST",
			mode: "no-cors",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formData }),
		})
			.then(() => alert("Success!"))
			.catch((error) => alert(error));
	};

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
						<form
							onSubmit={handleSubmit}
							name='contact'
							data-netlify='true'
							data-netlify-honeypot='bot-field'
						>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								placeholder='Email address'
								className='sm:w-[430px] w-full  h-[60px] pl-6 pr-48 border-2 !outline-none border-gray-300 lg:rounded-2xl rounded-xl'
							/>

							<div className='absolute top-1/2  right-[6px]  -translate-y-1/2'>
								<button
									type='submit'
									className='text-white font-Source font-bold text-base  bg-buton  py-3 px-10 rounded-[10px]'
								>
									Join Waitlist
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
