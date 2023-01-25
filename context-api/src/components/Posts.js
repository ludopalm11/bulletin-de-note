// 4EME ÉTAPE
import { useContext, Fragment } from "react";
import PostContext from "../context/PostContext";

const Posts = () => {
	// On consomme (utilise) les datas reçues de PostContext
	const [state, dispatch] = useContext(PostContext);
	const { posts } = state;
	console.log(posts);

	return (
		<Fragment>
			{posts.map((post, i) => (
				<p key={i}>{post}</p>
			))}

			<button onClick={() => dispatch({ type: "SHUFFLE" })}>Cliquer</button>
		</Fragment>
	);
};

export default Posts;
