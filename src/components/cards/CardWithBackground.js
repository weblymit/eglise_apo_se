import React from "react";
import { Link } from "gatsby";
import Date from '../date'

function CardWithBackground({ title, dateEvenement, time, bgImage, slug }) {
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.60),
			rgba(0, 0, 0, 0.23)
		), url(${bgImage})`,
	};
	return (
		<div
			className=' py-36s h-[35vh]s  container md:h-auto  bg-cover bg-center md:max-w-md bg-white mx-auto shadow-lg'
			style={style}
		>
			<Link to={`/events/${slug}`}>
				<div className='flex flex-col content-betweenl justify-betweens uppercase space-y-12 md:space-y-0'>
					<p className='text-3xl font-bold text-gray-100 py-10 '>{title}</p>
					<div className='pt-20 pb-6'>
						<Date dateString={dateEvenement}  className="text-gray-100 font-semibold text-lg md:text-xl"/>
						<p className='text-gray-100 font-light text-lg'>{time}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default CardWithBackground;
