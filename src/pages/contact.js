import React from "react";
import ContactForm from "../components/contactPage/ContactForm";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import SEO from "../components/SEO";

const Contact = () => {

	return (
		<Layout>
			<SEO
				title='Contactez nous'
				description="Contactez Eglise Apostolique Saint-Etienne. Nous sommes une église chrétienne, protestante et évangélique. "
				keywords='"Serge Plais", "Eglise Saint Etienne", "Eglise evangélique Saint Etienne"'
			/>
			<Header title='Nous contacter' />
			<div className='lg:py-14 container lg:max-w-2xl lg:bg-gray-200 my-16'>
				<ContactForm />
			</div>
		</Layout>
	);
};

export default Contact;
