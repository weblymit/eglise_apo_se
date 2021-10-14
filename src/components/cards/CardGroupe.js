import React from "react";

function CardGroupe({title, subtitle}) {
	return (
		<div className='text-center bg-gray-50 borders p-4 shadow-lg  md:py-10'>
			<p className='text-2xl md:text-3xl lg:text-2xl font-extrabold text-gray-800'>{title}</p>
			<p className="text-sm md:text-base pt-1">{subtitle}</p>
		</div>
	);
}

export default CardGroupe;
