import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import SectionOne from "../components/aboutPage/SectionOne";

const About = () => {
	return (
		<Layout>
			<Header title='Notre Vision' />
			<div className='pt-16'>
				<SectionOne />
			</div>
		</Layout>
	);
};

export default About;
