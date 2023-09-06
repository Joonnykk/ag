import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper, { Pagination, EffectFade, Autoplay } from "swiper";
import { advantages } from "./advantages.js";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".nineScene-animate");

export const advantagesSlider = new Swiper("#advantages", {
	modules: [Pagination, EffectFade, Autoplay],
	slidesPerView: 1,
	spaceBetween: 10,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	mousewheel: {
		invert: false,
	},
	speed: 400,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".advantages-swiper-pagination-sm",
		clickable: true,
		renderBullet: function (index, className) {
			return `<div class="${className}"></div>`;
		},
	},
	breakpoints: {
		1024: {
			pagination: {
				el: ".advantages-swiper-pagination-md",
				clickable: true,
				renderBullet: (index, className) => {
					return `<div class="${className}">
                                    <div class="advantages-pagination-icon">
                                        ${advantages[index].icon}
                                    </div>
                                    <div class="advantages-pagination-title text-[14px] leading-[21px]">
                                        ${advantages[index].text}
                                    </div>                                    
                                </div>`;
				},
			},
		},
	},
});

advantagesSlider.autoplay.stop();

const animation = () => {
	gsap.fromTo(
		".nineScene-left",
		{
			translateY: "200%",
		},
		{
			translateY: 0,
			duration: 1.2,
			scrollTrigger: {
				trigger: ".nineScene",
				start: "center-=200px center",
			},
		}
	);
	gsap.fromTo(
		".nineScene-right",
		{
			translateY: "200%",
		},
		{
			translateY: 0,
			duration: 1.2,
			scrollTrigger: {
				trigger: ".nineScene",
				start: "center-=200px center",
			},
		}
	);
};

export const advantagesAnimation = () => {
	ScrollTrigger.matchMedia({
		"(min-width:1024px)": () => {
			animation();
		},
	});

	sections.forEach((section, index) => {
		gsap.fromTo(
			section,
			{
				translateY: "100%",
				opacity: 0,
			},
			{
				translateY: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: ".nineScene",
					scrub: 1,
					start: `top-=10${index * 1.5}px center`,
					end: "top center",
				},
			}
		);
	});

	ScrollTrigger.create({
		trigger: ".nineScene",
		start: "top+=350px center",
		end: "center+=550px center",
		onToggle: () => advantagesSlider.autoplay.start(),
	});
};
