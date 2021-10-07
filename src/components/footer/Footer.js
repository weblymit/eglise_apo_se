import React from "react";
import { info } from "../../../infoSite";

function Footer() {
	const infoSite = info.siteMetadata;
	const socialMedia = info.siteMetadata.socilaMedia;
	return (
		<div className='text-green-50 bg-gray-800  py-16 lg:py-28 mt-12S'>
			<div className='container px-4 '>
				<h2 className='text-2xl lg:text-4xl font-black text-center pb-6 pt-2 lg:pt-6 uppercase'>
					Eglise Apostolique <br /> Saint Etienne
				</h2>
				<div className='flex justify-center items-center py-5 text-green-600'>
					{socialMedia?.map(({ href, component }) => (
						<a href={href} key={href} target='_blank' rel='noopener noreferrer'>
							{component}
						</a>
					))}
				</div>
				<div className='text-xs text-center'>
					Copyright © {new Date().getFullYear()}{" "}
					<span className='text-sm  py-1 '>{infoSite.title}</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
