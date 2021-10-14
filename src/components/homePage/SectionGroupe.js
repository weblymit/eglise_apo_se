import React from "react";
import CardGroupe from "../cards/CardGroupe";
import { H2 } from "../heading/Title";

function SectionGroupe() {
	return (
		<div className='pt-20 pb-10 md:pb-28 md:pt-24 lg:pt-40 lg:pb-48 container '>
			<H2 title='Nos activités' />
			<div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 lg:pt-5 md:container'>
				<CardGroupe title="Enfant" subtitle="de 0 à 12" />
				<CardGroupe title="Jeunesse"  subtitle="de 12 à 18"/>
				<CardGroupe title="Louange" subtitle="chant et musique" />
				<CardGroupe title="Mission" subtitle="je veux servir" />
			</div>
		</div>
	);
}

export default SectionGroupe;
