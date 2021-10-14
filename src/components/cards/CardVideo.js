import { Link } from "gatsby";
import React from "react";
import ReactPlayer from "react-player/youtube";
// import Date from "../date";
import { parseISO, format } from "date-fns";
import frLocale from "date-fns/locale/fr";

function CardVideo({ title, dateVideo, slug, urlVideo }) {
	const date = parseISO(dateVideo);

	return (
		<div className='max-w-md lg:max-w-2xl min-w-full  mx-auto '>
			<Link to={`videos/${slug}`}>
				<div className='bg-white shadow-md border border-gray-200 mb-5'>
					<div className='h-[14vh] lg:h-[30vh] '>
						<ReactPlayer url={urlVideo} width='100%' height='100%' light />
					</div>
					<div className='p-2 h-24 lg:p-5 lg:h-28'>
						<p className='text-gray-900 font-semibold text-sm md:text-lg tracking-tight '>
							{title}
						</p>
						<time dateTime={dateVideo} className='text-gray-700 mb-3 text-xs md:text-base'>
							{format(date, "d MMM yy", { locale: frLocale })}
						</time>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default CardVideo;
