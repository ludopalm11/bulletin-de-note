//  3EME ÉTAPE
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// On oublie pas de rappeler en racine le provider qui a reçu les datas
import PostProvider from "./provider/PostProvider";

ReactDOM.render(
	<React.StrictMode>
		<PostProvider>
			<App />
		</PostProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
