import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
	return {
		color: isActive ? "red" : "blue",
	};
};

export const Navbar = () => {
	return (
		<nav>
			<NavLink style={navLinkStyles} to='/'>
				Home
			</NavLink>
			<NavLink style={navLinkStyles} to='/about'>
				About
			</NavLink>
			<NavLink style={navLinkStyles} to='/posts'>
				Posts
			</NavLink>
		</nav>
	);
};
