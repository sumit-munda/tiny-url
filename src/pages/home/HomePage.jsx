import React from "react";
import "./HomePage.css";

// images
import { domain, logo, man, man2, qrcode, woman } from "../../main";

// icons
import { FaDiscord, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { PiMouseLeftClickFill } from "react-icons/pi";

const HomePage = () => {
	return (
		<section className="home-page container">
			<header>
				<div className="navbar bg-base-100">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="div-dropdown lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
								<li>
									<a a-nav-center>Home</a>
								</li>
								<li>
									<a>Features</a>
									<ul className="p-2">
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</li>
								<li>
									<a>About</a>
								</li>
								<li>
									<a>Contact</a>
								</li>
							</ul>
						</div>

						{/* Image for smaller screens */}
						<a className="a-domain lg:hidden">
							<img
								src={domain}
								alt="logo"
								width={100}
							/>
						</a>

						{/* Image for larger screens */}
						<a className="a-logo hidden lg:block">
							<img
								src={logo}
								alt="logo"
								width={80}
							/>
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a className="a-nav-center">Home</a>
							</li>
							<li>
								<details>
									<summary className="a-nav-center">Features</summary>
									<ul className="p-2">
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<a className="a-nav-center">About</a>
							</li>
							<li>
								<a className="a-nav-center">Contact</a>
							</li>
						</ul>
					</div>

					<div className="navbar-end">
						<a className="login-btn">Login </a>
						<a className="signup-btn">Sign Up</a>
					</div>
				</div>
			</header>

			<main>
				<div className="hero bg-base-100 min-h-[83vh]">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src={qrcode}
							className="max-w-xs rounded-lg shadow-2xl"
						/>
						<div>
							<p>
								<span className="flex items-center my-2 text-gray-700 bg-gray-300 w-max py-2 px-4 rounded-full">
									You are just one click away...
									<PiMouseLeftClickFill />
								</span>
							</p>
							<h1>Transform your links, Transform your reach</h1>
							<p className="py-6">
								Shorten, share, and track your URLs effortlessly with our
								powerful URL shortener.
							</p>
							<div>
								<input
									type="text"
									placeholder="Paste your url here and ..."
									className="w-52"
								/>
								<button className="ml-2">
									<span className="flex items-center">
										Click <PiMouseLeftClickFill className="icon" />
									</span>
								</button>
							</div>
							<div className="reviews flex items-center my-4">
								<div className="images flex">
									<img
										className="img1"
										src={man}
										alt="man"
									/>

									<img
										className="img2"
										src={man2}
										alt="man2"
									/>

									<img
										className="img3"
										src={woman}
										alt="woman"
									/>
								</div>
								<div className="rating">
									<p className="text-sm">
										⭐⭐⭐⭐⭐
										<br /> 100+reviews
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

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
		</section>
	);
};

export default HomePage;
