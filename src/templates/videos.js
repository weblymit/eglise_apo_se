import React from "react";
import Pager from "../components/paginate/Pager";
import { H2 } from "../components/heading/Title";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import CardVideo from "../components/cards/CardVideos";
import SEO from "../components/SEO";


function Videos({ pageContext, data }) {
	const videos = data.allGraphCmsVideo.nodes;
	return (
		<Layout>
			<SEO
				title='Nos vidéos'
				description="Voici les dernières vidéos de l'église évangélique de Saint-Etienne"
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<Header title='nos vidéos' />
			<div className='container py-14 lg:py-32'>
				<H2 title='dernières vidéos' />
				<div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 lg:containers lg:items-center lg:pt-10'>
					{videos.map((video) => (
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
				<Pager pageContext={pageContext} />
			</div>
		</Layout>
	);
}

export const query = graphql`
	query ($skip: Int!, $limit: Int!) {
		allGraphCmsVideo(
			sort: { fields: createdAt, order: DESC }
			skip: $skip
			limit: $limit
		) {
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

export default Videos;
