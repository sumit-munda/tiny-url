import React from "react";
// images
import { domain, logo} from "../main";

const Header = () => {
	return (
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
								<a>Home</a>
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
					<a
						href="/login"
						className="login-btn">
						Login{" "}
					</a>
					<a href="/signup" className="signup-btn">Sign Up</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
