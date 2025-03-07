import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { BASE_PATH } from "./lib/config/config.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './index.css';

// Components
import Layout  from './lib/templates/Layout.tsx';
import Login from './lib/routes/Login.tsx';
import Home from './lib/routes/Home.tsx';

let root = document.getElementById('root')!;
root.classList.add('w-full', 'h-full', 'bg-slate-200');

ReactDOM.createRoot(root).render(
	<StrictMode>
		<Router>
			<Layout>
				<Routes>
					<Route index element={<Login />} />
					<Route path={`${BASE_PATH}/home`} element={<Home />} />
				</Routes>
			</Layout>
		</Router>
	</StrictMode>,
);