import React from "react";
import Card from "../cards/CardWithBackground";
import { H2 } from "../heading/Title";
import MoreList from "../MoreList";

const SectionEvent = ({ events }) => {
	return (
		<div className='py-16  lg:py-28 xl:py-36 container bg-gray-200'>
			<H2 title='événements' />
			<div className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-2 '>
				{events.nodes.map((event) => (
					<Card
						key={event.id}
						title={event.titreEvenement}
						dateEvenement={event.dateEvenement}
						time={event.heure}
						bgImage={event.image.imageEvenement[0].image.url}
						slug={event.slug}
					/>
				))}
			</div>
			<MoreList link="/events" />
		</div>
	);
};

export default SectionEvent;
