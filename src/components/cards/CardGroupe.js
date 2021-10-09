import React from "react";

function CardGroupe({title, subtitle}) {
	return (
		<div className='text-center border-2s border-b-2s border-l-2s bg-gray-50 borders p-4 rounded-bl-xlj bg-transparents shadow-lg lg:py-10'>
			<p className='text-2xl font-extrabold text-gray-800'>{title}</p>
			<p className="text-sm pt-1">{subtitle}</p>
		</div>
	);
}

export default CardGroupe;
