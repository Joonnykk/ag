import Swiper, { Navigation, Pagination } from "swiper";
import { gsap } from "gsap";

let init = true;

export const plans = new Swiper(".plans.swiper", {
	slidesPerView: 1,
	initialSlide: 0,
	spaceBetween: 10,
	allowTouchMove: false,
	speed: 2000,
});

export const pricesAnimation = () => {
	const tabs = document.querySelectorAll(".twelfthScene .tab");
	let activeTab = tabs[0];

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			activeTab.setAttribute("aria-checked", "false");
			tab.setAttribute("aria-checked", "true");
			activeTab = tab;
			plans.slideTo(index);
		});
	});

	if (window.location.hash !== "" && init) {
		const slide = parseInt(new URL(location.href).searchParams.get("s"));

		if (slide) {
			activeTab.setAttribute("aria-checked", "false");
			tabs[slide].setAttribute("aria-checked", "true");
			activeTab = tabs[slide];
			plans.slideTo(slide);
		}
	}
	init = false;

	gsap.fromTo(
		".twelfthScene-animate",
		{
			translateY: "100%",
			opacity: 0,
		},
		{
			translateY: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: ".twelfthScene",
				// scrub: 1,
				start: `top-=100px center`,
				end: "top center",
			},
		}
	);
};
