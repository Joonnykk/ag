import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".animation-container > div");
const container = document.querySelector(".animation-container");
const title = document.querySelector('[area="title-thirdScene"]');
const section = document.querySelector(".thirdScene");

const sectionWidth = 895;
const modifier = sections.length - 1;
const gap = 10;

const animation = () => {
	gsap.fromTo(
		sections,
		{
			x: 0,
		},
		{
			x:
				-1 * (sectionWidth * 2 + gap * modifier) +
				(container.getBoundingClientRect().width - sectionWidth),
			ease: "none",
			scrollTrigger: {
				trigger: ".animation-container",
				pin: true,
				scrub: 1,
				start: "center center",
				end: `+=${sectionWidth * sections.length}`,
			},
		}
	);
};

export const cardsAnimation = () => {
	if (container) {
		ScrollTrigger.matchMedia({
			"(min-width:1024px)": () => {
				animation();
			},
		});
	}

	if (title) {
		gsap.fromTo(
			title,
			{
				translateY: 100,
				opacity: 0,
			},
			{
				translateY: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: section,
					start: "200 bottom",
					end: "200 center",
				},
			}
		);
	}
};
