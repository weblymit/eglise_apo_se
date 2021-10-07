import React from 'react'
import ImgBg from '../../images/bg-header.jpeg'
// import Navbar from '../navigation/Navbar';

const HeaderHomePage = ({ title1, title2 }) => {
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.32),
			rgba(24, 24, 25, 0.63)
		), url(${ImgBg})`,
	};
  return (
		<div>
			<div
				className='bg-gray-50 mb-12s bg-scroll md:bg-fixed bg-cover bg-center '
				style={style}
			>
				{/* <Navbar /> */}
				<div className='flex justify-center content-end text-gray-100 px-4 md:px-0 '>
					<div className='py-32 md:py-44 lg:py-56 container'>
						<div className='font-semibold pb-3 md:pb-2 text-center'>
							<h1 className='text-3xl md:text-4xl lg:text-7xl font-bold leading-tight md:leading-normal md:max-w-6xl'>
								Bienvenue à <br /> Eglise Apostolique <br /> Saint Etienne
							</h1>
							<h2 className='text-4xl md:text-4xl lg:text-7xl font-bold leading-tight md:leading-normal md:max-w-6xl'></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderHomePage
