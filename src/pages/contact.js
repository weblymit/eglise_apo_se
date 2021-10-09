import React from "react";
import ContactForm from "../components/contactPage/ContactForm";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";

const Contact = () => {

	return (
    <Layout>
      <Header title="Nous contacter" />
			<div className='lg:py-20 lg:container'>
				<ContactForm />
			</div>
		</Layout>
	);
};

export default Contact;
