import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const showElemetsWorld = () => {
	gsap.registerPlugin(ScrollTrigger);

	const block = document.querySelector(".World-VR");
	const title = block.querySelector(".title");
	const text = block.querySelector(".text");
	const button = block.querySelector(".button");

	gsap.from(title, {
		opacity: 0,
		y: 100,
		duration: 1,
		scrollTrigger: {
			trigger: title,
			start: "50% bottom",
		},
	});
	gsap.from(text, {
		opacity: 0,
		y: 100,
		duration: 1,
		scrollTrigger: {
			trigger: text,
			start: "40% bottom",
		},
	});
	gsap.from(button, {
		opacity: 0,
		y: 100,
		duration: 1,
		scrollTrigger: {
			trigger: button,
			start: "40% bottom",
		},
	});

	// gsap.fromTo(
	//   title,
	//   { opacity: 0, y: 100 },
	//   {
	//     opacity: 1,
	//     y: 0,
	//     scrollTrigger: {
	//       trigger: title,
	//       end: "50% 80%",
	//       scrub: true,
	//     },
	//   }
	// );
	// gsap.fromTo(
	//   text,
	//   { opacity: 0, y: 100 },
	//   {
	//     opacity: 1,
	//     y: 0,
	//     scrollTrigger: {
	//       trigger: text,

	//       end: "40% 80%",
	//       scrub: true,
	//     },
	//   }
	// );
	// gsap.fromTo(
	//   button,
	//   { opacity: 0, y: 100 },
	//   {
	//     opacity: 1,
	//     y: 0,
	//     scrollTrigger: {
	//       trigger: button,
	//       end: "40% 80%",
	//       scrub: true,
	//     },
	//   }
	// );
};
