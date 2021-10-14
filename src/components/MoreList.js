import { Link } from "gatsby";
import React from "react";

function MoreList({ link }) {
	return (
		<Link to={link}>
			<div className='text-center font-semibold text-sm pt-8 lg:pt-12'>
				<span className='uppercase text-gray-600 p-2 border border-gray-600'>
					Plus d'événements
				</span>
			</div>
		</Link>
	);
}

export default MoreList;
