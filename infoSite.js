import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export const info = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Eglise apostolique de Saint Etienne",
		description:
			"Gatsby blog starter for GraphCMS! Powered by `gatsby-source-graphcms`, featuring `gatsby-image` and MDX!",
		keywords: "Headless CMS, GraphCMS, GraphQL CMS, Gatsby",
		navBarBg: "bg-red-700",
		logoAlt: "Eglise apostolique de Saint Etienne logo de l'église",
		logo: "/vercel.svg",
		menuLinks: [
			{
				label: "Accueil",
				href: "/",
			},
			{
				label: "à propos",
				href: "/a-propos-de-nous",
			},

			{
				label: "Contact",
				href: "/contact",
			},
		],
		socilaMedia: [
			{
				href: "https://www.facebook.com/eastetienne",
				component: <FaFacebook className='text-3xl opacity-60 ' />,
			},
			{
				href: "https://www.instagram.com",
				component: <FaInstagram className='mx-4 text-3xl opacity-60' />,
			},
			{
				href: "https://www.youtube.com/channel/UCMZphfCbVQEV-qz6VPe-aYQ",
				component: <FaYoutube className='text-3xl opacity-60' />,
			},
		],
	},
};
