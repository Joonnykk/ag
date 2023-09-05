export const mobileMenuOpen = () => {
	const popupMenuMobile = document.querySelector('[area="popupMenu-mobile"]');
	const buttonCloseMobile = popupMenuMobile.querySelector(
		'[area="buttonCloseMenu"]'
	);
	const burger = document.querySelector('[area="burger"]');
	const menuList = popupMenuMobile.querySelector('[area="menuList"]');
	const bgPopupMenu = popupMenuMobile.querySelector('[area="bgPopupMenu"]');

	burger.addEventListener("click", () => {
		if (window.innerWidth < 640) {
			bgPopupMenu.classList.add("menuMobileOpen");
			setTimeout(() => {
				menuList.classList.add("menuMobileShow");
			}, 300);
		}
	});

	buttonCloseMobile.addEventListener("click", (e) => {
		if (window.innerWidth < 640) {
			menuList.classList.remove("menuMobileShow");
			setTimeout(() => {
				bgPopupMenu.classList.remove("menuMobileOpen");
			}, 300);
		}
	});
};

export const toggleLanguage = () => {
	const input = document.querySelector("#language-toggle");
	const label = document.querySelector('[area-label="language-toggle"]');
	input.addEventListener("click", () => {
		if (input.checked) {
			input.setAttribute("checked", false);
			label.classList.remove("checked-ru", "checked-en");
			label.classList.add("checked-ru");
		} else {
			input.setAttribute("checked", true);
			label.classList.remove("checked-ru", "checked-en");
			label.classList.add("checked-en");
		}
	});
};

export const openDesktopMenu = () => {
	const burger = document.querySelector('[area="burger"]');
	const buttonClose = document.querySelector('[area="buttonCloseDesktop"]');
	const popupMenu = document.querySelector('[area="popupMenu-desktop"]');
	const staticMenu = document.querySelector('[area="static-menu"]');

	burger.addEventListener("click", () => {
		if (window.innerWidth >= 640) {
			popupMenu.classList.add("menuDesktopShow");
			staticMenu.classList.add("menuStaticHide");
		}
	});

	buttonClose.addEventListener("click", () => {
		if (window.innerWidth >= 640) {
			popupMenu.classList.remove("menuDesktopShow");
			staticMenu.classList.remove("menuStaticHide");
		}
	});

	document.addEventListener("click", (e) => {
		const withinBoundaries = e.composedPath().includes(popupMenu);
		if (!withinBoundaries && !e.composedPath().includes(burger)) {
			popupMenu.classList.remove("menuDesktopShow");
			staticMenu.classList.remove("menuStaticHide");
		}
	});
};
