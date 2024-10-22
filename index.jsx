import React from "react";
import ReactDOM from "react-dom/client";

export const App = () => {
	return (
		<div>
			<h1>Aplicacion Nueva</h1>
		</div>
	);
};

// let container = document.getElementById("root");
// let root = ReactDOM.createRoot(container);
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)