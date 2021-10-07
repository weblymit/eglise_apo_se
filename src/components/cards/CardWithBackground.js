import React from 'react'

function CardWithBackground({ title, date, time, bgImage }) {
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.80),
			rgba(0, 0, 0, 0.23)
		), url(${bgImage})`,
	};
	return (
		<div
			className=' py-36s h-[35vh]s  container md:h-auto  bg-cover bg-center md:max-w-md bg-white mx-auto shadow-lg'
			style={style}
		>
			<div className='flex flex-col content-betweenl justify-betweens uppercase space-y-12 md:space-y-0'>
				<p className='text-3xl font-bold text-gray-100 py-10 '>{title}</p>
				<div className='pt-20 pb-6'>
					<p className='text-gray-100 font-semibold text-xl'>{date}</p>
					<p className='text-gray-100 font-light text-lg'>{time}</p>
				</div>
			</div>
		</div>
	);
}

export default CardWithBackground
