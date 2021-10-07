import React from "react";
import { Link } from "gatsby";
import { info } from "../../../infoSite";

const Navbar = () => {
	const infoSite = info.siteMetadata;
	const menuLink = info.menuLinks;

  return (
		<nav className={`py-5 container text-green-50s`}>
			<div className=''>
				<ul className='flex items-center justify-between'>
					<li>
						<Link to='/'>
              <a className=''>
                <p>LOGO</p>
								{/* <img
									src={infoSite.logo}
									className='w-24'
									alt={infoSite.logoAlt}
								/> */}
							</a>
						</Link>
					</li>
					<ul className='hidden lg:flex items-center justify-between space-x-4 text-lgl uppercase font-bol'>
						{menuLink.map(({ href, label, style }) => (
							<li key={`${href}${label}`} className={`py-2 `}>
								<Link to={href}>{label}</Link>
							</li>
						))}
					</ul>
					<div className='lg:hidden'>
						{/* <Hamburger links={menuLink} /> */}
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
