const path = require("path");
const slash = require(`slash`);
const { paginate } = require("gatsby-awesome-pagination");

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

	const allEventsComponent = path.resolve("./src/templates/events.js");
	const allVideosComponent = path.resolve("./src/templates/videos.js");
	const events = data.events.nodes;
	const videos = data.videos.nodes;
	// Create your paginated pages for events
	paginate({
		createPage, // The Gatsby `createPage` function
		items: events, // An array of objects
		itemsPerPage: 2, // How many items you want per page
		pathPrefix: "/events", // Creates pages like `/blog`, `/blog/2`, etc
		component: slash(allEventsComponent), // Just like `createPage()`
	});
	// Create your paginated pages for videos
	paginate({
		createPage, // The Gatsby `createPage` function
		items: videos, // An array of objects
		itemsPerPage: 2, // How many items you want per page
		pathPrefix: "/videos", // Creates pages like `/blog`, `/blog/2`, etc
		component: slash(allVideosComponent), // Just like `createPage()`
	});

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

