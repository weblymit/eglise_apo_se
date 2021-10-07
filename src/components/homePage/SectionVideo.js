import React from "react";
import CardVideo from "../cards/CardVideo";
import { H2 } from "../heading/Title";
import MoreList from "../MoreList";

function SectionVideo() {
	return (
		<div className='py-16  lg:py-20 xl:py-28 containers px-1 bg-gray-100'>
			<H2 title='Dernières Vidéos' />
			<div className='grid grid-cols-2 gap-2'>
				<CardVideo title="La pêche miraculeuse" date="10 nov 2021" />
				<CardVideo title="La foi miraculeuse" date="10 avr 2021" />
				<CardVideo title="La guéison miraculeuse" date="10 dec 2021"/>
				<CardVideo title="Ta Parole est une lampe" date="10 sept 2021"/>
      </div>
      <MoreList />
		</div>
	);
}

export default SectionVideo;
