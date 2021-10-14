import React from "react";
import CardVideo from "../cards/CardVideo";
import { H2 } from "../heading/Title";
import MoreList from "../MoreList";

function SectionVideo({ videos }) {
	console.log("videos:", videos);
	// const title = videos.nodes.video.titreVideo;
	// const description = videos.nodes.video.descriptionAuteur;
	// const urlVideo = videos.nodes.video.urlVideo;
	// const dateVideo = videos.nodes.video.dateVideo;
	// const heure = videos.nodes.video.heure;
	return (
		<div className='py-16 lg:py-32 px-1 bg-gray-100s lg:bg-transparent'>
			<H2 title='Dernières Vidéos' />
			<div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 lg:containers lg:items-center  '>
				{videos.nodes.map((video) => (
					<CardVideo
						key={video.id}
						title={video.titreVideo}
						dateVideo={video.dateVideo}
						urlVideo={video.urlVideo}
						// bgImage={video.image.imageEvenement[0].image.url}
						slug={video.slug}
					/>
				))}
			</div>
			<MoreList />
		</div>
	);
}

export default SectionVideo;
