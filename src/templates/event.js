import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import Date from "../components/date";
import BackButon from "../components/BackButon";

function Event(props) {
	const title = props.pageContext.event.titreEvenement;
	const description = props.pageContext.event.description;
	const dateEvenement = props.pageContext.event.dateEvenement;
	const heure = props.pageContext.event.heure;
	return (
		<Layout>
			<Header title={title} />
			<div className='container py-10 lg:py-20 lg:px-2 lg:max-w-5xl'>
				<div className='pb-4 lg:pb-8'>
					<BackButon urlBack="/events" />
				</div>
				<div className='text-gray-900'>
					<h2 className='font-bold text-3xl lg:text-7xl'>{title}</h2>
					<div className='py-2 lg:py-4'>
						<Date
							dateString={dateEvenement}
							className='lg:text-2xl text-green-600'
						/>
						<div className='mt-3 md:mt-5 '>
							<span className='font-light text-gray-100 lg:text-xl bg-green-700 p-2  rounded '>
								{heure}{" "}
							</span>
						</div>
					</div>
				</div>
				<p className='lg:text-xl pt-4 lg:pt-10'>{description}</p>
			</div>
		</Layout>
	);
}

export default Event;
