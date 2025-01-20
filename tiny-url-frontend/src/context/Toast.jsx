import React, { createContext, useContext } from "react";
import { Bounce, toast } from "react-toastify";

const toastCss = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
	transition: Bounce,
};

// create context
const ToastContext = createContext(null);

// use context
const useToast = () => useContext(ToastContext);

// context provider
const ToastProvider = ({ children }) => {
	const showToast = (type, message) => {
		toast[type](message, toastCss);
	};

	return (
		<ToastContext.Provider
			value={{
				success: (msg) => showToast("success", msg),
				error: (msg) => showToast("error", msg),
				info: (msg) => showToast("info", msg),
				warning: (msg) => showToast("warn", msg),
				defToast: (msg) => showToast("default", msg),
			}}>
			{children}
		</ToastContext.Provider>
	);
};

export { ToastProvider, useToast };
