import React from "react";
import { BiMenu } from "react-icons/bi";
import Drawer from "@mui/material/Drawer";
import { Link } from "gatsby";

function Hamburger({ links }) {
	const [state, setState] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setState(open);
	};
	return (
		<div className=''>
			<BiMenu
				onClick={toggleDrawer(true)}
				className='text-access-orange-default text-5xl'
			/>
			<Drawer anchor='top' open={state} onClose={toggleDrawer(false)}>
				<div className='h-screen bg-gray-700'>
					<p
						onClick={toggleDrawer(false)}
						className='text-4xl font-black text-gray-100 text-right pr-8 pt-5'
					>
						x
					</p>
					<ul className='p-4 pt-28 text-center text-2xl text-green-500 uppercase font-semibold'>
						{links?.map(({ label, style, href }) => (
							<li
								key={label}
								className={`py-2 ${
									style == "style"
										? "bg-pink-600 rounded-lg text-gray-100 mx-12"
										: ""
								}`}
							>
								<Link to={href}>{label}</Link>
							</li>
						))}
					</ul>
				</div>
			</Drawer>
		</div>
	);
}

export default Hamburger;
