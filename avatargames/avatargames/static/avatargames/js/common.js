import "../css/common.css";
import "../css/header.css";
import "../css/footer.css";

import {
	mobileMenuOpen,
	openDesktopMenu,
	toggleLanguage,
} from "./header.js";

import { questionBounced } from "./footer";

window.addEventListener("DOMContentLoaded", () => {
	mobileMenuOpen();
	toggleLanguage();
	openDesktopMenu();

	questionBounced();
//	phoneInputsInit();
//	orderFormInit();
//	activePopupMenuLink();
//	activeStaticDesktopMenuLink();
//	scrollTopButton();
});