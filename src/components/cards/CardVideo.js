import React from 'react'
import ReactPlayer from "react-player/youtube";


function CardVideo({title, date}) {
  return (
		<div className='max-w-md mx-auto'>
			<div className='bg-white shadow-md border border-gray-200 mb-5'>
				<div className=''>
					<ReactPlayer
						url='https://youtu.be/yW7AY9AAcwU'
						width='100%'
						height='100%'
					/>
				</div>
				<div className='p-2'>
					<a href='#'>
						<p className='text-gray-900 font-semibold text-sm tracking-tight mb-2'>
							{title}
						</p>
					</a>
					<p className='font-normal text-gray-700 mb-3 text-xs'>
						{date}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardVideo
