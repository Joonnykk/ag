export const scrollTopButton = () => {
	const scrollTopButton = document.querySelector(".scrollTopButton");
	const button = scrollTopButton.querySelector("button");
	const firstScreen = document.querySelector("#firstScreen");

	function visibilityButton() {
		scrollY >= 500
			? scrollTopButton.classList.remove("invisible", "opacity-0")
			: scrollTopButton.classList.add("invisible", "opacity-0");
	}

	if (scrollTopButton) {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("click");

			const topOffset = document.querySelector(
				'[area="static-menu"]'
			).offsetHeight;
			const elementPosition = firstScreen.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: "smooth",
			});
		});

		window.addEventListener("scroll", () => {
			visibilityButton();
		});
	}
};
