import * as React from "react";
import HeaderHomePage from "../components/homePage/HeaderHomePage";
import SectionEvent from "../components/homePage/SectionEvent";
import SectionGroupe from "../components/homePage/SectionGroupe";
import SectionVerset from "../components/homePage/SectionVerset";
import SectionVideo from "../components/homePage/SectionVideo";
import Layout from "../components/layout/Layout";

// styles
const IndexPage = () => {
	return (
		<Layout>
			<HeaderHomePage />
			<div className='py-10 container'>
				<SectionEvent />
			</div>
			<div className='container'>
				<SectionVideo />
      </div>
      <div className="">
        <SectionGroupe />
      </div>
      <div className="bg-gray-100 py-16">
        <div className="h-1 w-20 mx-auto mb-8 bg-gray-600"/>
        <SectionVerset />
      </div>
		</Layout>
	);
};

export default IndexPage;
