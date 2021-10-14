import React from "react";
import CardVideo from "../cards/CardVideo";
import { H2 } from "../heading/Title";
import MoreList from "../MoreList";

function SectionVideo({ videos }) {
	
	return (
		<div className='py-16 lg:py-32 px-1 bg-gray-100s lg:bg-transparent'>
			<H2 title='Dernières Vidéos' />
			<div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 lg:containers lg:items-center'>
				{videos.nodes.map((video) => (
					<CardVideo
						key={video.slug}
						title={video.titreVideo}
						dateVideo={video.dateVideo}
						urlVideo={video.urlVideo}
						// bgImage={video.image.imageEvenement[0].image.url}
						slug={video.slug}
					/>
				))}
			</div>
			<MoreList link='/videos' />
		</div>
	);
}

export default SectionVideo;
