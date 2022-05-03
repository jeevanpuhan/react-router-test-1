import React, { Fragment, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				post: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				post: {},
				error: "Something went wrong!",
			};
		default:
			return state;
	}
};

const PostForm = () => {
	const { postId } = useParams();
	const [state, dispatch] = useReducer(reducer, initialState);
	const [currentPostId, setCurrentPostId] = useState("");

	const fetchData = (postId) => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => {
				console.log(res);
				dispatch({ type: "FETCH_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "FETCH_ERROR" });
			});
	};

	useEffect(() => {
		fetchData(postId);
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		fetchData(currentPostId);
	};

	return (
		<>
			<div
				style={{
					textAlign: "center",
					backgroundColor: "aliceblue",
					border: "2px dotted red",
				}}
			>
				<h5>Current Post ID: {currentPostId}</h5>
				<form onSubmit={submitHandler}>
					<div>
						<label htmlFor='post_id'></label>
						<input
							type='text'
							name='post_id'
							id='post_id'
							value={currentPostId}
							onChange={(e) => setCurrentPostId(e.target.value)}
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
				<div>
					{state.loading ? (
						"loading..."
					) : (
						<div>
							<h3>Post: {state.post.id}</h3>
							<h4>{state.post.title}</h4>
							<p>{state.post.body}</p>
						</div>
					)}
					{state.error ? state.error : null}
				</div>
			</div>
		</>
	);
};

export default PostForm;
