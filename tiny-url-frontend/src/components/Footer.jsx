import React from "react";
import { FaDiscord, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { logo } from "../main";

const Footer = () => {
	return (
		<footer className="footer bg-base-100 flex justify-between p-4">
			<aside className="grid-flow-col items-center">
				<img
					className="rounded-sm"
					src={logo}
					alt=""
					width={50}
				/>
				<p className="text-sm">
					Copyright © {new Date().getFullYear()} - All right reserved
				</p>
				|<a href="">Terms</a>
				<a href="">Policy</a>
			</aside>
			<nav className="grid-flow-col text-xl gap-4 md:place-self-center md:justify-self-end">
				<a href="">
					<FaDiscord />
				</a>
				<a href="">
					<FaGithub />
				</a>
				<a href="">
					<FaTwitter />
				</a>
				<a href="">
					<FaLinkedinIn />
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
