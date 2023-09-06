import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const textAnimateMain = () => {
	gsap.registerPlugin(ScrollTrigger);
	const textAnimate = document.querySelectorAll('[area="text-animate"]');
	const buttonAnimate = document.querySelectorAll('[area="button-animate"]');

	let items = gsap.utils.toArray(textAnimate);

	items.forEach((item) => {
		gsap.from(item, {
			scrollTrigger: {
				trigger: item,
				start: "0 bottom",
			},
			opacity: 0,
			y: 100,
			duration: 1,
		});
	});
};
