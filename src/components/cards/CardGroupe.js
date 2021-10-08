import React from "react";

function CardGroupe({title, subtitle}) {
	return (
		<div className='text-center border-2s border-b-2s border-l-2s border-green-400 border p-4 rounded-bl-xlj bg-transparents shadow-lg '>
			<p className='text-2xl font-extrabold text-gray-800'>{title}</p>
			<p className="text-sm pt-1">{subtitle}</p>
		</div>
	);
}

export default CardGroupe;
