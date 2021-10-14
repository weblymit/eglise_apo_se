const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	const { data } = await graphql(`
		{
			events: allGraphCmsEvenement(filter: { stage: { eq: PUBLISHED } }) {
				nodes {
					titreEvenement
					id
					slug
					dateEvenement
					heure
					description
				}
			}
			videos: allGraphCmsVideo(filter: { stage: { eq: PUBLISHED } }) {
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
	`);

	data.events.nodes.forEach((event) => {
		createPage({
			component: path.resolve(`src/templates/event.js`),
			context: {
				id: event.id,
				event,
			},
			path: `/events/${event.slug}`,
		});
	});
	data.videos.nodes.forEach((video) => {
		console.log('video:', video)
		createPage({
			component: path.resolve(`src/templates/video.js`),
			context: {
				id: video.id,
				video,
			},
			path: `/videos/${video.slug}`,
		});
	});
};

