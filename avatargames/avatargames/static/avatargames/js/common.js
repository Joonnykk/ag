import "../css/common.css";
import "../css/fonts.css";
import "../css/preloader.css"
import "../css/header.css";
import "../css/footer.css";
import "../css/form/form.css";
import "../css/form/messages/style.css";
import "../css/discount.css";
import "../css/checkbox.css";


import { preloader } from "./preloader.js";
preloader();

import { scrollTopButton } from "./scroll_to_top.js";

import {
	mobileMenuOpen,
	openDesktopMenu,
	toggleLanguage,
} from "./header.js";

import {
	orderFormInit,
	phoneInputsInit,
} from "./form/main.js";

import { questionBounced } from "./footer";

window.addEventListener("DOMContentLoaded", () => {
	mobileMenuOpen()
	toggleLanguage()
	openDesktopMenu()

	questionBounced()
    phoneInputsInit()
    orderFormInit()
//	activePopupMenuLink();
//	activeStaticDesktopMenuLink();
    scrollTopButton();
});