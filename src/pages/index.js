import * as React from "react";
import HeaderHomePage from "../components/homePage/HeaderHomePage";
import SectionEvent from "../components/homePage/SectionEvent";
import SectionGroupe from "../components/homePage/SectionGroupe";
import SectionVerset from "../components/homePage/SectionVerset";
import SectionVideo from "../components/homePage/SectionVideo";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

const IndexPage = ({ data }) => {
	const { events, videos } = data;
	return (
		<Layout>
			<SEO
				title='Bienvenue à la maison'
				description="Bienvenue à l'église apostolique de Saint-Etienne. Nous sommes une église chrétienne, protestante et évangélique "
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<HeaderHomePage />
			<div className='py-10 container lg:px-2 lg:mt-20'>
				<SectionEvent events={events} />
			</div>
			<div className='container lg:px-2'>
				<SectionVideo videos={videos} />
			</div>
			<div className='bg-gray-200'>
				<SectionGroupe />
			</div>
			<div className=' py-16 md:py-24 lg:py-36'>
				<div className='h-1 w-20 md:w-1/5 lg:w-40 mx-auto mb-8 bg-green-500' />
				<SectionVerset />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query PageQuery {
		events: allGraphCmsEvenement(
			filter: { stage: { eq: PUBLISHED } }
			limit: 3
			sort: { fields: dateEvenement }
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
		videos: allGraphCmsVideo(filter: { stage: { eq: PUBLISHED } }, limit: 4) {
			nodes {
				descriptionAuteur
				dateVideo
				auteurDuMessage
				slug
				titreVideo
				urlVideo
			}
		}
	}
`;

export default IndexPage;
