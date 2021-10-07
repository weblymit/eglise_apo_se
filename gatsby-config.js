module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Eglise apostolique de Saint Etienne",
		description:
			"Gatsby blog starter for GraphCMS! Powered by `gatsby-source-graphcms`, featuring `gatsby-image` and MDX!",
		keywords: "Headless CMS, GraphCMS, GraphQL CMS, Gatsby",
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
	],
};
