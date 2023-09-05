import { Flip } from "number-flip";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const flipCountEl = document.querySelector(".fiveScene-flip");
const flipCountElCountry = document.querySelector(".fiveScene-flip-country");

const flipCounter = () => {
	flipCountEl.innerHTML = "";

	new Flip({
		node: flipCountEl,
		from: 0,
		to: 137,
		duration: 2,
		direct: true,
	});

	flipCountElCountry.innerHTML = "";

	new Flip({
		node: flipCountElCountry,
		from: 0,
		to: 9,
		duration: 2,
		direct: true,
	});
};

export const countriesAnimation = () => {
	ScrollTrigger.create({
		trigger: ".fiveScene",
		start: "start center",
		once: true,
		onEnter: flipCounter,
	});

	gsap.fromTo(
		".fiveScene-animate",
		{
			translateY: "100%",
			opacity: 0,
		},
		{
			translateY: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: ".fiveScene",
				// scrub: 1,
				start: `top-=100px center`,
				end: "top center",
			},
		}
	);
};