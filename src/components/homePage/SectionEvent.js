import React from "react";
import Card from "../cards/CardWithBackground";
import { H2 } from "../heading/Title";
import MoreList from "../MoreList";

const SectionEvent = () => {
	return (
		<div className='py-16  lg:py-20 xl:py-28 container bg-gray-100'>
			<H2 title='événements' />
			<div className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-5 '>
				<Card
					name='Texte'
					bgImage='https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'
					title='Mardi prière'
					date='25 décembre 2021'
					time='19h30 - 20h30'
				/>
				<Card
					name='Texte'
					bgImage='https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
					title='Jeudi prière'
					date='25 décembre 2021'
					time='19h30 - 20h30'
				/>
				<Card
					name='Texte'
					bgImage='https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'
					title='Groupe des jeunes'
					date='25 décembre 2021'
					time='19h30 - 20h30'
				/>
			</div>
			<MoreList />
		</div>
	);
};

export default SectionEvent;
