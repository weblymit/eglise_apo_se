import React from "react";
import Navbar from "./navigation/Navbar";

const Hedaer = ({ title }) => {
	let img =
		"https://images.unsplash.com/flagged/photo-1552997030-b4ba6de91b06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80";
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.32),
			rgba(24, 24, 25, 0.33)
		), url(${img})`,
	};
	return (
		<div>
			<div
				className='bg-gray-50 bg-scrolls md:bg-fixed bg-cover bg-center '
				style={style}
			>
				<Navbar />
				<div className='text-gray-100 px-4 md:px-0 text-center h-64 md:h-[50vh] lg:h-[60vh] flex flex-col items-center justify-center lg:pb-10'>
					<h1 className='uppercase	text-4xl md:text-6xl lg:text-8xl font-black leading-tight md:leading-snug md:max-w-6xls'>
						{title}
					</h1>
					<div className='h-1 w-1/4 bg-green-200 mt-3 mx-auto' />
				</div>
			</div>
		</div>
	);
};

export default Hedaer;
