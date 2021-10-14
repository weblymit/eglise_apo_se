import React from "react";
import { IoCaretBack } from "react-icons/io5";
import { Link } from "gatsby";

function BackButon() {
	return (
		<Link to='/'>
			<div className='flex items-center text-gray-400 space-x-2'>
				<IoCaretBack className='text-2xl' />
				<p className='lg:text-xl uppercase font-light'>retour</p>
			</div>
		</Link>
	);
}

export default BackButon;
