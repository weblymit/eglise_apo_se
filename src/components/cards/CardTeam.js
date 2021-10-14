import React from "react";
// import img from "../../images/bg-header.jpeg";

function CardTeam() {
  const img =
		"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80";
	const style = {
		backgroundImage: `linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.12),
			rgba(24, 24, 25, 0.13)
		), url(${img})`,
	};
	return (
		<div class='max-w-sm w-full lg:max-w-6xl lg:flex'>
			<div
				class='h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
				style={style}
			></div>
			<div class='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow'>
				<div class='mb-8'>
					<p class='text-gray-900 font-bold text-2xl'>
						Serge PLAIS
          </p>
          <p className="mb-2 font-semibold text-green-500">Pasteur principal</p>
					<p class='text-gray-700 text-base'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla! Maiores et perferendis eaque,
						exercitationem praesentium nihil.
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardTeam;
