import React from "react";
import ContactForm from "../components/contactPage/ContactForm";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";

const Contact = () => {

	return (
    <Layout>
      <Header title="Nous contacter" />
			<div className='lg:py-14 container lg:max-w-2xl lg:bg-gray-200 my-16'>
				<ContactForm />
			</div>
		</Layout>
	);
};

export default Contact;
