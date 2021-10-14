import React from "react";
import { info } from "../../../infoSite";

function Footer() {
	const infoSite = info.siteMetadata;
	const socialMedia = info.siteMetadata.socilaMedia;
	return (
		<div className='text-green-50 bg-gray-800  py-16 lg:py-28 mt-12S'>
			<div className='container px-4 '>
				<a
					href='https://goo.gl/maps/M2T81z47oiEiV8h57'
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='text-center pb-6'>
						<h2 className='text-2xl lg:text-4xl font-black  pb-4 pt-2 lg:pt-6 uppercase'>
							Eglise Apostolique <br /> Saint-Etienne
						</h2>
						<div className='text-green-400 text-sm'>
							<p>31 rue de la république</p>
							<p>42000 Saint-Étienne</p>
						</div>
					</div>
				</a>
				<div className='flex justify-center space-x-3 items-center py-5 text-green-500'>
					{socialMedia?.map(({ href, component }) => (
						<a href={href} key={href} target='_blank' rel='noopener noreferrer'>
							{component}
						</a>
					))}
				</div>
				<div className='text-xs text-center text-gray-400 lg:pt-7'>
					Copyright © {new Date().getFullYear()}{" "}
					<span className='text-sm  py-1 '>{infoSite.title}</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
