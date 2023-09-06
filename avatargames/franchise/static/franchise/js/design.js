import Swiper, { Pagination, Autoplay } from "swiper";
import { gsap } from "gsap";

export const designAnimation = () => {
	const slider = new Swiper(".sixteenthScene.swiper", {
		modules: [Pagination, Autoplay],
		slidesPerView: "auto",
		spaceBetween: 10,
		speed: 3000,
		loop: true,
		pagination: {
			el: ".sixteenthScene.swiper .swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});

	gsap.fromTo(
		".sixteenthScene-animate",
		{
			translateY: "100%",
			opacity: 0,
		},
		{
			translateY: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: ".sixteenthScene",
				// scrub: 1,
				start: `top+=100px center`,
				// end: "top center",
			},
		}
	);
};
