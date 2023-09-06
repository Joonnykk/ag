import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const showGameCard = () => {
	gsap.registerPlugin(ScrollTrigger);
	const block = document.querySelector('[area="GamesCards"]');
	const bannersLeft = block.querySelectorAll(".banner-left");
	const bannersRight = block.querySelectorAll(".banner-right");

	let itemsL = gsap.utils.toArray(bannersLeft);

	itemsL.forEach((item) => {
		gsap.fromTo(
			item,
			{ y: 100 },
			{
				y: 0,

				scrollTrigger: {
					trigger: item,
					scrub: true,
					start: "top bottom",
					end: "center bottom",
				},
			}
		);
	});
	let itemsR = gsap.utils.toArray(bannersRight);

	itemsR.forEach((item) => {
		gsap.fromTo(
			item,
			{ y: 150 },
			{
				y: 0,

				scrollTrigger: {
					trigger: item,
					scrub: true,
					start: "top bottom",
					end: "center bottom",
				},
			}
		);
	});
};
