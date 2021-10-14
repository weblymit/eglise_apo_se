import React from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import SectionOne from "../components/teamPage/SectionOne";

function Equipe() {
	return (
		<Layout>
			<SEO
				title='Equipe pastorale'
				description="Voici botre équipe pastorale de l'église apostolique de Saint-Etienne. Nous sommes une église chrétienne, protestante et évangélique "
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<Header title='Notre équipe' />
			<div className='py-20 lg:py-28 '>
				<div className='container lg:max-w-3xl'>
					<SectionOne />
				</div>
			</div>
		</Layout>
	);
}

export default Equipe;
