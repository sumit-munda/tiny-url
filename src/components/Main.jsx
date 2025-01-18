import React from "react";
import { man, man2, qrcode, woman } from "../main";
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
							<span className="flex items-center my-2 text-gray-700 bg-gray-300 w-max py-2 px-4 rounded-full">
								You are just one click away...
								<PiMouseLeftClickFill />
							</span>
						</p>
						<h1>Transform your links, Transform your reach</h1>
						<p className="py-6">
							Shorten, share, and track your URLs effortlessly with our powerful
							URL shortener.
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
	);
};

export default Main;
