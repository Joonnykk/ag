export const preloader = () => {
	const textsPreloader = document.querySelectorAll(".preloader__text");
	let i = 0;
	textsPreloader.forEach((text) => {
		setTimeout(() => {
			text.classList.remove("hidden");
		}, 1000);
	});
	const changeTextPreloader = () => {
		textsPreloader.forEach((text, index) => {
			text.classList.add("opacity-0");

			if (i == index) {
				setTimeout(() => {
					text.classList.remove("opacity-0");
				}, 300);
			}
		});
		i++;
		if (i >= textsPreloader.length) {
			i = 0;
		}
	};

	const intervalTextShow = setInterval(() => {
		changeTextPreloader();
	}, 5000);
	window.onload = function () {
		document.body.classList.add("loaded_hiding");
		window.setTimeout(function () {
			document.body.classList.add("loaded");
			document.body.classList.remove("loaded_hiding");
		}, 500);
		clearInterval(intervalTextShow);
	};
	clearTimeout();
};
