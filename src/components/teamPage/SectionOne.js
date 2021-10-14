import React from "react";
import CardTeam from "../cards/CardTeam";
import CardTeam2 from "../cards/CardTeam2";
import { H2 } from "../heading/Title";

const SectionOne = () => {
	const img1 =
		"https://images.unsplash.com/photo-1616273313747-cb6841ac108d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80";
	const img2 =
		"https://images.unsplash.com/photo-1512663150964-d8f43c899f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1892&q=80";
	return (
		<div>
			<H2 title='Rencontrez le pasteur et son équipe' />
			<div className=''>
				<div className='mt-10'>
					<CardTeam />
				</div>
				<div className='mt-10 lg:mt-24 lg:flex justify-center lg:space-x-5'>
					<div className='mb-5'>
						<CardTeam2 name='Cristiano Ronaldo' title='Ancien' image={img1} />
					</div>
					<div className=''>
						<CardTeam2 name='Léo Messie' title='Ancien' image={img2} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionOne;
