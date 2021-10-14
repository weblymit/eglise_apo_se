require("dotenv").config();

module.exports = {
	siteMetadata: {
		siteUrl: "https://egliseapostoliquesaintetienne.fr/",
		title: "Eglise apostolique de Saint Etienne",
		description:
			"Bienvenue à l'église apostolique de Saint-Etienne. nous vous accueillons tous les dimanches",
		author: "weblymit",
		image: "/images/ease.jpeg",
		menuLinks: [
			{
				label: "Accueil",
				href: "/",
			},
			{
				label: "à propos",
				href: "/qui-sommes-nous",
			},

			{
				label: "Contact",
				href: "/contact",
			},
		],
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "components",
				path: "./src/components",
			},
			__key: "components",
		},
		{
			resolve: "gatsby-source-graphcms",
			options: {
				// Your GraphCMS API endpoint. Available from your project settings.
				endpoint:
					process.env.GRAPHCMS_ENDPOINT ||
					"https://api-eu-central-1.graphcms.com/v2/ckuntunvv4bp501z0es5u19jw/master",
				// A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
				token: process.env.GRAPHCMS_TOKEN,
			},
		},
	],
};
