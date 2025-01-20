import React from "react";
import { qrcode, } from "../main";
import { PiMouseLeftClickFill } from "react-icons/pi";

const Main = () => {
	return (
		<main>
			<div className="hero bg-base-100 min-h-[83vh]">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src={qrcode}
						className="max-w-xs rounded-lg shadow-2xl"
					/>
					<div>
						<p>
							<span className="flex items-center my-2 text-gray-800 bg-gray-300 w-max py-2 px-4">
								You are just one click away...
								<PiMouseLeftClickFill />
							</span>
						</p>
						<h1>Transform your links, Transform your reach</h1>
						<p className="py-6">
							Shorten, share, and track your URLs effortlessly with our powerful
							URL shortener.
						</p>
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

						<div className="reviews flex items-center my-4 y">
							<div className="avatar-group -space-x-6 rtl:space-x-reverse">
								<div className="avatar">
									<div className="w-10 h-10">
										<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-10 h-10">
										<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
									</div>
								</div>
								<div className="avatar">
									<div className="w-10 h-10">
										<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
									</div>
								</div>
								<div className="avatar placeholder">
									<div className="bg-neutral text-neutral-content w-10 h-10">
										<span>+99</span>
									</div>
								</div>
							</div>

							<div className="rating flex-col ml-4 w-100 h-50">
								<div className="stars">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-400"
										defaultChecked
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-400"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-400"
									/>
								</div>
								<p className="ml-2 text-xs">99 + reviews</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
