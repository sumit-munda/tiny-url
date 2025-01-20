import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { TbShare, TbEdit } from "react-icons/tb";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import "../App.css";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Analytics = ({ revenueData }) => {
	// Ensure revenueData is not undefined or empty before mapping over it
	if (!revenueData || revenueData.length === 0) {
		return <div>Loading...</div>; // or some other loading state
	}

	// Chart data and options
	const chartData = {
		labels: revenueData.map((data) => data.label),
		datasets: [
			{
				label: "Revenue",
				data: revenueData.map((data) => data.revenue),
				borderColor: "black",
				borderWidth: 2,
				pointRadius: 0, // This removes the dots
				backgroundColor: "black",
			},
			{
				label: "Date",
				data: [], // Add the appropriate data here if needed
				borderColor: "black",
				borderWidth: 2,
				pointRadius: 0, // This removes the dots
				backgroundColor: "black",
			},
			{
				label: "Total",
				data: [], // Add the appropriate data here if needed
				borderColor: "black",
				borderWidth: 2,
				pointRadius: 0, // This removes the dots
				backgroundColor: "black",
			},
		],
	};

	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				color: "black",
			},
			legend: {
				labels: {
					color: "black",
				},
			},
		},
		layout: {
			padding: {
				top: -20,
			},
		},
		scales: {
			x: {
				ticks: {
					color: "black",
				},
				grid: {
					color: "black",
				},
			},
			y: {
				ticks: {
					color: "black",
				},
				grid: {
					color: "black",
				},
			},
		},
	};

	return (
		<>
			{/* Data Card for the Chart */}
			<div className="data-card px-4 outline outline-1 outline-black">
				{/* The `Line` component from react-chartjs-2 will automatically handle the canvas */}
				<Line
					data={chartData}
					options={chartOptions}
				/>
			</div>

			{/* Recent History */}
			<div className="recent-box p-4 w-[95%] mx-auto my-2 outline outline-1 outline-black rounded-sm">
				<p className="recent-box-header flex justify-between bg-gray-800 text-blue-100 px-2">
					<p>Recent History</p>
					<p>2 Results</p>
				</p>

				{/* Link 1 */}
				<div className="link-box my-2">
					<div className="short-link-box flex justify-between items-center bg-gray-300 rounded-sm outline outline-1 outline-black px-2">
						<p>http://localhost:web-dev-cohort-one.zero</p>
						<p className="icons flex">
							<TbShare className="icon" />
							<TbEdit className="icon" />
						</p>
					</div>
					<div className="outline outline-1 outline-black mt-2 rounded-sm p-2">
						<p className="long-url">
							"https://piyushgargdev.notion.site/Web-Dev-Cohort-1-0-15c45a61dc0380588622c95aea90e7c8"
						</p>
						<p className="date-time mt-2 text-xs text-gray-400">
							<i className="fa-regular fa-clock"></i> Dec 16 2020 12:56 PM
						</p>
					</div>
				</div>

				{/* Link 2 */}
				<div className="link-box my-2">
					<div className="short-link-box flex justify-between items-center bg-gray-300 rounded-sm outline outline-1 outline-black  px-2">
						<p>http://localhost:web-dev-cohort-one.zero</p>
						<p className="icons flex">
							<TbShare className="icon" />
							<TbEdit className="icon" />
						</p>
					</div>
					<div className="outline outline-1 outline-black mt-2 rounded-sm p-2">
						<p className="long-url mt-2 text-sm text-gray-500">
							"https://piyushgargdev.notion.site/Web-Dev-Cohort-1-0-15c45a61dc0380588622c95aea90e7c8"
						</p>
						<p className="date-time mt-2 text-xs text-gray-400">
							<i className="fa-regular fa-clock"></i> Dec 16 2020 12:56 PM
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Analytics;
