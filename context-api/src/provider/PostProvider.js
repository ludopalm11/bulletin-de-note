//  2ÈME ÉTAPE
import { useReducer, useEffect } from "react";
// On récupère le contexte crée qui va nous fournir le Provider (Objet du context API)
// qui pourra ensuite passer en props le reducer aux composants enfants

import PostContext from "../context/PostContext";

const initialState = {
	posts: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "INIT":
			return {
				...state,
				posts: action.posts,
			};
		case "SHUFFLE":
			const posts = [...state.posts];
			posts.sort(() => Math.random() - 2);
			return {
				...state,
				posts: posts,
			};
		default:
			return state;
	}
};

// En props "children" pour passer les datas aux enfants
const PostProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: "INIT",
			posts: ["Bonjour", "Comment", "Ça", "Va"],
		});
	}, []);

	return (
		// Ici on récupère le context pour passer les datas aux composants enfants
		// grâce au Provider fournit du context api
		<PostContext.Provider value={[state, dispatch]}>
			{children}
		</PostContext.Provider>
	);
};

export default PostProvider;
