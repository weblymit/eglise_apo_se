import React from "react";
import Credo from "./Credo";
import Presentation from "./Presentation";

function SectionOne() {
	return (
		<div className=''>
			<div className='px-6 lg:container'>
				<div className='lg:max-w-2xl lg:mx-auto lg:py-12'>
					<p className='text-center font-bold text-2xl lg:text-4xl'>
						Nous sommes une église chrétienne, protestante et évangélique
					</p>
					<div className='h-1 w-28 lg:w-1/3 bg-green-500 mt-6 lg:mt-8 mx-auto' />
				</div>
				<Presentation />
			</div>
			<div className='bg-gray-100 mt-12 lg:pb-20'>
				<div className='px-6 py-16 lg:container'>
					<Credo />
				</div>
			</div>
		</div>
	);
}

export default SectionOne;
