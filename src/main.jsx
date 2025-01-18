import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";

// images
import domain from "./assets/images/domain.png";
import logo from "./assets/images/logo.gif";
import man from "./assets/images/man.png";
import man2 from "./assets/images/man2.png";
import woman from "./assets/images/woman.png";
import qrcode from "./assets/images/qr-code.png";
import tbrand from "./assets/images/triple-brand.png";

// firebase
import { FirebaseProvider } from "./context/firebase.jsx";

// firebase

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<FirebaseProvider>
			<App />
			<ToastContainer />
		</FirebaseProvider>
	</StrictMode>
);

export { domain, logo, man, man2, woman, qrcode, tbrand };
