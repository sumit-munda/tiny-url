import React from "react";
import { domain, logo } from "../../main";
import "./Dashboard.css";
import { FaBell, FaRegBell } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import { useFirebase } from "../../context/firebase";
import Footer from "../../components/Footer";
import { SiDocsdotrs } from "react-icons/si";
import { PiLinkSimpleBold, PiMouseLeftClickFill } from "react-icons/pi";
import { IoMdAnalytics } from "react-icons/io";
import { TbEdit, TbSettings, TbShare } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import { RiRoadMapLine } from "react-icons/ri";
import { Line } from "react-chartjs-2";
import revenueData from "../../assets/data/revenueData.json";
import Analytics from "../../components/Analytics";

import "../../App.css";

const firebase = () => useFirebase();
console.log(firebase);

const Dashboard = () => {
	const email = "John Doe";

	return (
		<section className="dash-borad container">
			<header>
				<div className="navbar bg-base-100 ">
					<div className="flex-none">
						<a
							href="/"
							className="a-domain">
							{/* { tooltip hover:tooltip-open tooltip-bottom} */}
							{/* data-tip={`Copyright © ${new Date().getFullYear()} All rights reserved`} */}
							<img
								src={domain}
								alt="domain"
								className="w-28"
							/>
						</a>
					</div>

					<div className="nav-center my-0 mx-auto">
						<p className="flex items-center bg-gray-800 text-blue-100 bg-gray-300 py-2 px-8 ">
							Chart Your Journey <RiRoadMapLine className="ml-2" />
						</p>
					</div>

					<div className="flex-none">
						<div className="dropdown dropdown-end flex items-center">
							{/* <div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle">
								<div className="indicator">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span className="badge badge-sm indicator-item">8</span>
								</div>
							</div> */}

							<label
								className="swap label-pos mx-2
							">
								{/* this hidden checkbox controls the state */}
								<input
									type="checkbox"
									className="outline-none p-0"
								/>

								{/* bell icon disabled */}
								<FaBell className="swap-on w-4" />
								<span
									className="swap-on badge badge-neutral badge-border border-white
                                 badge-xs indicator-item ml-2"></span>

								{/* bell icon enabled */}
								<FaRegBell className="swap-off w-4" />
								<span className="swap-off"></span>
							</label>

							{/* <div
								className="tooltip hover:tooltip-open tooltip-bottom"
								data-tip="Upgrad To Pro Plan">
								<button className="btn">Bottom</button>
							</div> */}

							<div className="mx-4">
								{/* className="hover:tooltip tooltip-open tooltip-bottom"
								data-tip="hello" */}
								<button
									className="go-pro-btn tooltip hover:tooltip-open tooltip-bottom"
									data-tip="Upgrade To Pro Plan">
									<span className="flex items-center">
										<LuCrown className="icon" />
										Go Pro
									</span>
								</button>
							</div>

							{/* <div
								tabIndex={0}
								className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
								<div className="card-body">
									<span className="text-lg font-bold">8 Items</span>
									<span className="text-info">Subtotal: $999</span>
									<div className="card-actions">
										<button className="btn btn-primary btn-block">
											View cart
										</button>
									</div>
								</div>
							</div> */}
						</div>

						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">{email}</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<div className=" h-[82vh] grid grid-cols-[1fr_4fr_2fr] gap-4 ">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col">
						<button>
							<SiDocsdotrs className="icon" />
							Docs
						</button>
						<button>
							<PiLinkSimpleBold className="icon" />
							Ur Links
						</button>
						<button>
							<IoMdAnalytics className="icon" />
							Analytics
						</button>
						<button>
							<TbSettings className="icon" />
							Settings
						</button>
						<button>
							<MdSupportAgent className="icon" />
							Support
						</button>
						<button>
							<FaRegQuestionCircle className="icon" />
							FAQs
						</button>
					</div>
					<button>
						<BiLogOut className="icon" />
						Logout
					</button>
				</div>

				<div className="flex flex-col">
					<div className="data-card">
						<Analytics revenueData={revenueData} />
					</div>
				</div>

				<div>
					<div className="main-three">
						<div className="input-box flex flex-col gap-5 outline outline-1 outline-black rounded-sm p-2">
							<p className="d-b-para">
								<PiLinkSimpleBold className="icon" />
								CREATE NEW LINK
							</p>
							<p className="text-sm">Create, short, and manage your links</p>
							<div className="flex">
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
						</div>
						<div className="link-box flex flex-col gap-5 outline outline-1 outline-black rounded-sm p-2">
							<p className="d-b-para"><PiLinkSimpleBold className="icon" />CUSTOMIZED LINK</p>
							<div className="site-image">
								<img
									src={logo}
									alt="site-image"
								/>
							</div>
							<a href="">
								<i className="fa-solid fa-link"></i> tinyurl.com
							</a>
						</div>
						<div className="qr-box outline outline-1 outline-black rounded-sm p-2">
							<p className="d-b-para">
								<BsQrCode className="icon" />
								QR CODE
							</p>

							<div className="qr-details">
								<div className="qr-code">
									<BsQrCode className=" w-20 h-20" />
								</div>
								<div className="more-details">
									<div className="link">
										<p>
											<i className="fa-solid fa-link"></i> tinyurl.com
										</p>
									</div>
									<div className="date">
										<p>
											<i className="fa-solid fa-calendar-days"></i> 22 December
											2024
										</p>
									</div>
									<button className="btn-b">Download PNG</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <hr className="mt-1 h-0 border border-black border-1"/> */}
			{/* <Footer /> */}
		</section>
	);
};

export default Dashboard;
