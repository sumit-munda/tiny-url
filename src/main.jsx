import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import domain from "./assets/images/domain.png";
import logo from "./assets/images/logo.gif";
import man from "./assets/images/man.png";
import man2 from "./assets/images/man2.png";
import woman from "./assets/images/woman.png";
import qrcode from "./assets/images/qr-code.png";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);

export { domain, logo, man, man2, woman, qrcode };
