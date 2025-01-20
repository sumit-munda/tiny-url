import React from "react";
import "./HomePage.css";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const HomePage = () => {
	return (
		<section className="home-page container">
			<Header />

			<Main />

			<Footer />
		</section>
	);
};

export default HomePage;
