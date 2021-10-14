import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import { graphql } from "gatsby";
import { H2 } from "../components/heading/Title";
import Card from "../components/cards/CardWithBackground";
import Pager from "../components/paginate/Pager";
import SEO from "../components/SEO";


function Events({ pageContext, data }) {
  const events = data.allGraphCmsEvenement.nodes
	return (
		<Layout>
			<SEO
				title="Nos événements"
				description="Voici les derniers événements de l'église évangélique de Saint-Etienne"
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<Header title='événements' />
			<div className='container py-14 lg:py-32'>
				<H2 title='événements à venir' />
				<div className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-2 lg:pt-10'>
					{events.map((event) => (
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
				<Pager pageContext={pageContext} />
			</div>
		</Layout>
	);
}

export const query = graphql`
	query ($skip: Int!, $limit: Int!) {
		allGraphCmsEvenement(
			sort: { fields: createdAt, order: DESC }
			skip: $skip
			limit: $limit
		) {
			nodes {
				titreEvenement
				id
				slug
				dateEvenement
				heure
				description
				image {
					id
					# gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
					imageEvenement {
						image {
							url
						}
					}
				}
			}
		}
	}
`;

export default Events;
