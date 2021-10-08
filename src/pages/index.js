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
			<div className='py-10 container lg:px-2'>
				<SectionEvent />
			</div>
			<div className='container'>
				<SectionVideo />
      </div>
      <div className="bg-gray-100">
        <SectionGroupe />
      </div>
      <div className=" py-16 lg:py-36">
        <div className="h-1 w-20 lg:w-40 mx-auto mb-8 bg-green-500"/>
        <SectionVerset />
      </div>
		</Layout>
	);
};

export default IndexPage;
