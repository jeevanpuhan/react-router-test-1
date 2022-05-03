import React from "react";
import { Outlet } from "react-router-dom";

function Posts() {
	return (
		<>
			<h2 style={{ textAlign: "center" }}>Posts</h2>
			<Outlet />
		</>
	);
}

export default Posts;
