import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Menu } from "./src/components/Menu";
import { Slider } from "./src/components/Slider";
import { Form } from "./src/components/Form";

// export const App = () => {
// 	return (
// 		<div>
// 			<h1>Aplicacion Nueva</h1>
// 		</div>
// 	);
// };

// let container = document.getElementById("root");
// let root = ReactDOM.createRoot(container);
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Slider />
    <Form />
  </React.StrictMode>
)