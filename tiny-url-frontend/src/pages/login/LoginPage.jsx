import React, { useEffect, useState } from "react";
import { domain, logo, tbrand } from "../../main";
import { FcGoogle } from "react-icons/fc";
import { useFirebase } from "../../context/firebase";
// import { useToast } from "../../context/Toast";
import { toast } from "react-toastify";
import Dashboard from "../dashboard/Dashboard";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const firebase = useFirebase();
	// const toast = useToast();

	useEffect(() => {
		if (firebase.isLoggedIn) {
			toast.success(`Hey, ${firebase.email}`);
		}
	}, [firebase.isLoggedIn]);

	if (firebase.isLoggedIn) {
		return (
			<Dashboard />
			// <div className="container">
			// 	<p>You are logged in.</p>
			// 	<button
			// 		className="btn-primary"
			// 		onClick={() => {
			// 			firebase.handleLogout(), (window.location.href = "/");
			// 		}}>
			// 		Logout
			// 	</button>
			// </div>
		);
	}

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const data = await firebase.signinWithEmailAndPassword(email, password);
			console.log(data);
			firebase.setIsLoggedIn(true);
		} catch (error) {
			toast.error(`Error: ${error.message}`);
		} finally {
			setEmail("");
			setPassword("");
			setLoading(false);
		}
	};

	return (
		<section className="login-page container">
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
						<a
							href="/"
							className="a-domain lg:hidden">
							<img
								src={domain}
								alt="logo"
								width={100}
							/>
						</a>

						{/* Image for larger screens */}
						<a
							href="/"
							className="a-logo hidden lg:block">
							<img
								src={logo}
								alt="logo"
								width={80}
							/>
						</a>
					</div>

					<div className="navbar-end">
						<a
							href="/signup"
							className="login-btn">
							Create an account
						</a>
					</div>
				</div>
			</header>

			<hr />
			{/* min-h-screen */}
			<div className=" bg-base-100 flex min-h-[85vh]">
				<div className="text-art w-1/3 flex items-center">
					<a href="/">
						<img
							src={tbrand}
							alt="t-brand"
						/>
					</a>
				</div>
				<div className="hero-content flex-col lg:flex-col my-0 mx-auto w-1/3">
					<div className="text-center lg:text-left">
						<h1 className="text-2xl ">Login</h1>
						<p className="py-2">
							Dont have an account?
							<a
								href="/signup"
								className="link link-hover">
								{" "}
								Create an account.
							</a>
						</p>
					</div>
					{/* max-w-sm */}
					<div className="card bg-base-100 w-full shrink-0">
						<form
							autoComplete="on"
							onSubmit={handleFormSubmit}
							className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="email"
									className="input input-bordered rounded-sm"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="password"
									className="input input-bordered rounded-sm"
									required
								/>
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									disabled={loading}
									className="btn-primary">
									{loading ? "Logging..." : "Login"}
								</button>
								<p className="text-center m-3">OR</p>
								<button
									onClick={firebase.signinWithGoogle}
									className="btn-primary ">
									<span className="flex items-center justify-center">
										Continue with <FcGoogle className="ml-2" />
										oogle
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
