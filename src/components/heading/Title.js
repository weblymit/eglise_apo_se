import React from "react";

export function TEXT({ title }) {
	return (
		<div className='pb-12 md:pb-16'>
			<p className=' text-gray-800  md:text-4xl'>
				{title}
			</p>
		</div>
	);
}
export function H1({ title }) {
	return (
		<div className='pb-12 md:pb-16 '>
			<h2 className='font-black text-gray-800 text-2xl md:text-4xl uppercase text-center'>
				{title}
			</h2>
			<div className='h-1 w-20 md:w-28 bg-gray-800 mx-auto mt-3' />
		</div>
	);
}
export function H2({ title }) {
	return (
		<div className='pb-10 md:pb-12 lg:pb-16'>
			<h2 className='font-black text-gray-800 text-2xl md:text-4xl uppercase text-center'>
				{title}
			</h2>
			<div className='h-1 w-20 md:w-28 bg-gray-800 mx-auto mt-3 lg:mt-5' />
		</div>
	);
}
export function H3({ title }) {
	return (
		<div className='pb-12 md:pb-16'>
			<h2 className='font-black text-gray-800 text-2xl md:text-4xl uppercase text-center'>
				{title}
			</h2>
			<div className='h-1 w-20 md:w-28 bg-gray-800 mx-auto mt-3' />
		</div>
	);
}
