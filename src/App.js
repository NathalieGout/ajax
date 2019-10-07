import React from 'react';
import Embed from 'react-runkit';

import createRunkitContentFromJSFunction from 'create-runkit-content-from-function';

import './App.css';

// redefine require so it can be used in code preparation.

// Several constraints to make it work :
// 1) redefine require so it can be used in code preparation.
const require = () => {};
// 2) store code you wanna use in a function declared as a named function, so toString method keeps its name, thus it can be called automatically.
// if it was a anonymous function stored in a variable, the toString method render

function testo() {
	var fetch = require('cross-fetch');

	fetch('https://opentdb.com/api.php?amount=10#')
		.then(res => res.json())
		.then(data => console.log(data));
}

function tt() {
	var fetch = require('cross-fetch');

	const asyncFunc = async () => {
		const res = await fetch('https://opentdb.com/api.php?amount=10#');
		const data = await res.json();
		console.log(data);
	};

	asyncFunc();
}

const url = 'https://runkit.com/hyphaene/5d97845fd8b6190014638429';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="embedWrapper">
					<Embed source={createRunkitContentFromJSFunction(testo)} />
					<Embed source={createRunkitContentFromJSFunction(tt)} />
					check
					<a href="https://github.com/jlengstorf/gatsby-with-apollo">
						https://github.com/jlengstorf/gatsby-with-apollo
					</a>
				</div>
			</header>
		</div>
	);
}

export default App;
