import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/posts' element={<Posts />}>
					<Route path=':postId' element={<PostForm />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
