import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import SectionOne from "../components/aboutPage/SectionOne";
import SEO from "../components/SEO";

const About = () => {
	return (
		<Layout>
			<SEO
				title='Notre église'
				description="Nous sommes une église chrétienne, protestante et évangélique. Membre de l'union des Eglises Apostoliques de France (membre du Conseil National des Evangélique de France : CNEF ) "
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<Header title='Notre Vision' />
			<div className='pt-16'>
				<SectionOne />
			</div>
		</Layout>
	);
};

export default About;
