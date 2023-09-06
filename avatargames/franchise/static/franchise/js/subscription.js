import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const animation = () => {
	gsap.fromTo(
		".fourteenthScene .left",
		{
			translateY: "200%",
		},
		{
			translateY: 0,
			duration: 1.2,
			scrollTrigger: {
				trigger: ".fourteenthScene",
				start: "20% center",
			},
		}
	);
	gsap.fromTo(
		".fourteenthScene .right",
		{
			translateY: "200%",
		},
		{
			translateY: 0,
			duration: 1.2,
			scrollTrigger: {
				trigger: ".fourteenthScene",
				start: "20% center",
			},
		}
	);
};

export const subscriptionAnimation = () => {
	ScrollTrigger.matchMedia({
		"(min-width:1024px)": () => {
			animation();
		},
	});

	gsap.fromTo(
		".fourteenthScene-animate",
		{
			translateY: "100%",
			opacity: 0,
		},
		{
			translateY: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: ".fourteenthScene",
				// scrub: 1,
				start: `10% center`,
				// end: "top center",
			},
		}
	);
};
