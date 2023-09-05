import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gamesAnimation = () => {
	gsap.fromTo(
		".sixScene-animate",
		{
			translateY: "100%",
			opacity: 0,
		},
		{
			translateY: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: ".sixScene",
				// scrub: 1,
				start: `top+=400 bottom`,
				end: "top center",
			},
		}
	);
};