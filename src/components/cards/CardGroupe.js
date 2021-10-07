import React from "react";

function CardGroupe({title, subtitle}) {
	return (
		<div className='text-center border-2 p-4 rounded-lg'>
			<p className='text-2xl font-extrabold text-gray-800'>{title}</p>
			<p className="text-sm pt-1">{subtitle}</p>
		</div>
	);
}

export default CardGroupe;
