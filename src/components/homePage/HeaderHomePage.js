import React from "react";
import ImgBg from "../../images/bg-header.jpeg";
import Navbar from '../navigation/Navbar';

const HeaderHomePage = ({ title1, title2 }) => {
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.82),
			rgba(24, 24, 25, 0.33)
		), url(${ImgBg})`,
	};
	return (
		<div>
			<div
				className='bg-gray-50 bg-scrolls md:bg-fixed bg-cover bg-center '
				style={style}
			>
				<Navbar />
				<div className='text-gray-100 px-4 md:px-0 text-center h-96 lg:h-screen flex flex-col items-center justify-center'>
					<h1 className='text-4xl md:text-6xl lg:text-8xl font-bold leading-tight md:leading-snug md:max-w-6xls'>
						Eglise Apostolique <br /> Saint Etienne
					</h1>
				</div>
			</div>
		</div>
	);
};

export default HeaderHomePage;
