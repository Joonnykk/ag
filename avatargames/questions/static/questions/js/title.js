import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const titleAnimate = () => {
	gsap.registerPlugin(ScrollTrigger);
	const title = document.querySelectorAll('[area="title-animate"]');

	const tlLoader = gsap.timeline();

	tlLoader
		.set('[area="title-animate"]', { yPercent: 150 })
		.to('[area="title-animate"]', {
			yPercent: 0,
			duration: 1.5,
		});
};
