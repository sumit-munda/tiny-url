import React from "react";
import "./index.css"; // Import global styles
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import Dashboard from "./pages/dashboard/Dashboard";
import LinkPreviewFavicon from "./components/test-components/LinkPreviewFavicon";
import LinkResult from "./components/test-components/Uuid";
import Uuid from "./components/test-components/Uuid";
import { elements } from "chart.js";
import NodeplusReact from "./components/test-components/NodeplusReact";

// import AppLayout from "./components/AppLayout";

// define your routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/apiconnect",
		element: <NodeplusReact />,
	},
	{
		path: "*", // Fallback route for unknown paths
		element: <div>Page Not Found</div>,
	},

	// app layout
	// {
	// 	path: "/",
	// 	element: <AppLayout />,
	// 	children: [
	// 		{
	// 			path: "/home",
	// 			element: <HomePage />,
	// 		},
	// 		{ path: "/login", element: <LoginPage /> },
	// 	],
	// },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
