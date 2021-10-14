import React from "react";

function CardTeam2({name, title, image}) {
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.12),
			rgba(24, 24, 25, 0.13)
		), url(${image})`,
	};
	return (
		<div class='max-w-sm w-full lg:max-w-fullf lg:flexs'>
			<div
				class='h-48 lg:h-autos lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
				style={style}
			></div>
			{/* <div className="">
        <img src={image} alt="" className="h-48g lg:w-full"  />
      </div> */}
			<div class='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow'>
				<div class='mb-8s'>
					<p class='text-gray-900 font-bold text-2xl'>{name}</p>
					<p className='mb-2 font-semibold text-green-500'>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default CardTeam2;
