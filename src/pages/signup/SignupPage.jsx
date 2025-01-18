import React, { useState } from "react";
import { domain, logo, tbrand } from "../../main";
import { FcGoogle } from "react-icons/fc";
import { useFirebase } from "../../context/firebase";
// import { useToast } from "../../context/Toast";
import { toast } from "react-toastify";

const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [termsChecked, setTermsChecked] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// const toast = useToast();
	const firebase = useFirebase();

	// signupWith
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (!email || !password) {
			toast.warning("Please fill in both fields.");
			return;
		}

		if (!termsChecked) {
			toast.warn("You must agree to the terms and conditions.");
			return;
		}

		try {
			const data = await firebase.signupWithEmailAndPassword(email, password);
			console.log(data);
			console.log(data.user, " has signed up.");
			toast.success("Account created successfully.");
		} catch (error) {
			const errorMessage = error?.message || "An unexpected error occurred.";
			setError(errorMessage);
			toast.error(`Error: ${errorMessage}`);
		} finally {
			setLoading(false);
			setEmail("");
			setPassword("");
			setTermsChecked(false);
		}
	};

	// redirect to user console
	if (firebase.isLoggedIn) {
		return (
			<div className="container">
				<p>You are Logged In.</p>
				<button
					className="btn-primary"
					onClick={() => {
						firebase.handleLogout(), (window.location.href = "/");
					}}>
					Logout
				</button>
			</div>
		);
	}

	return (
		<section className="signup-page container">
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

					<div className="navbar-end">
						<a
							href="/login"
							className="login-btn">
							Sign in
						</a>
					</div>
				</div>
			</header>

			<hr />
			{/* min-h-screen */}
			<div className=" bg-base-100 flex min-h-[85vh]">
				<div className="text-art w-1/3 flex items-center">
					<img
						src={tbrand}
						alt="t-brand"
					/>
				</div>
				<div className="hero-content flex-col lg:flex-col my-0 mx-auto w-1/3">
					<div className="text-center lg:text-left">
						<h1 className="text-2xl ">Create an account</h1>
						<p className="py-2">
							Already have an account?
							<a
								href="/login"
								className="link link-hover">
								{" "}
								Sign in.
							</a>
						</p>
					</div>
					{/* max-w-sm */}
					<div className="card bg-base-100 w-full shrink-0">
						<form
							onSubmit={handleFormSubmit}
							className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="email"
									className="input input-bordered rounded-sm"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									className="input input-bordered rounded-sm"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<label className="label">
									<input
										type="checkbox"
										className="checkboxw-2 outline-none accent-gray-800 mr-2"
										value={termsChecked}
										onChange={(e) => setTermsChecked(e.target.checked)}
									/>
									<p className="label-text-alt">
										I agree to the{" "}
										<a
											href="#"
											className="label-text-alt link">
											Terms and Conditions.
										</a>
									</p>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									disabled={loading || !termsChecked}
									className="btn-primary">
									{loading ? "Creating..." : "Create an account"}
								</button>
								<p className="text-center m-3">OR</p>
								<button
									onClick={firebase.signinWithGoogle}
									className="btn-primary ">
									<span className="flex items-center justify-center">
										{loading ? (
											"Creating..."
										) : (
											<>
												Continue with <FcGoogle className="ml-2" />
												oogle
											</>
										)}
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

export default SignupPage;
