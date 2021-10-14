import React from "react";
import { Link } from "gatsby";
import { info } from "../../../infoSite";
import Hamburger from "./Hamburger";

const Navbar = () => {
	const infoSite = info.siteMetadata;
	const menuLink = infoSite.menuLinks;

	return (
		<nav className={`py-5 container`}>
			<div className=''>
				<ul className='flex items-center justify-between text-gray-200 md:pt-5'>
					<li>
						<Link to='/'>
							<p className='text-3xl lg:text-5xl font-black pt-6z'>EASE</p>
							{/* <img
									src={infoSite.logo}
									className='w-24'
									alt={infoSite.logoAlt}
								/> */}
						</Link>
					</li>
					<ul className='hidden lg:flex items-center justify-between space-x-4 lg:text-xl uppercase font-bol'>
						{menuLink?.map(({ href, label, style }) => (
							<li key={`${href}${label}`} className={`py-2 `}>
								<Link to={href}>{label}</Link>
							</li>
						))}
					</ul>
					<div className='lg:hidden'>
						<Hamburger links={menuLink} />
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
