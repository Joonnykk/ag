import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const videoAnimation = () => {
	gsap.fromTo(
		"#elevenScene-video",
		{
			scale: 0.7,
		},
		{
			scale: 1,
			ease: "none",
			scrollTrigger: {
				trigger: ".elevenScene",
				scrub: 1,
				start: "top center",
				end: "center center",
			},
		}
	);

	gsap.fromTo(
		".elevenScene-animate",
		{
			translateY: "100%",
			opacity: 0,
		},
		{
			translateY: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: ".elevenScene",
				scrub: 1,
				start: `top-=100px center`,
				end: "top center",
			},
		}
	);

	window.addEventListener("load", () => {
		const iframe = document.querySelector("#elevenScene-video");
		if (iframe?.dataset.src) {
			iframe.src = iframe.dataset.src;
		}
	});
};