import React from "react";
import { Link } from "gatsby";

const Pager = ({ pageContext }) => {
	const { previousPagePath, nextPagePath } = pageContext;
	return (
		<div
			id='pager'
			className='flex justify-center rounded-md -space-x-px mx-auto mt-8 lg:mt-16'
		>
			{previousPagePath && (
				<Link
					to={previousPagePath}
					className='pager relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 shadow'
				>
					<svg
						className='h-5 w-5 text-green-500'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						aria-hidden='true'
					>
						<path
							fillRule='evenodd'
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</svg>
					<span className='sr-only'>Previous</span>
					<span>Précédent</span>
				</Link>
			)}

			{nextPagePath && (
				<Link
					to={nextPagePath}
					className='pager relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50  shadow'
				>
					<span className='sr-only'>Next</span>
					<span>Suivant</span>
					<svg
						className='h-5 w-5 text-green-500'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						aria-hidden='true'
					>
						<path
							fillRule='evenodd'
							d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				</Link>
			)}
		</div>
	);
};
export default Pager;
