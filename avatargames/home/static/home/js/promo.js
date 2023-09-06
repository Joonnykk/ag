import { gsap } from "gsap";

import Swiper, { Pagination, Autoplay } from "swiper";

export function promoSlider() {
	const promoSlider = new Swiper(".promo-slider", {
		modules: [Pagination, Autoplay],
		spaceBetween: 20,
		centeredSlides: true,

		loop: true,
		speed: 2000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination-promo",
			clickable: true,
		},
	});
}

export function showElementsInSlide() {
	const promoSlider = document.querySelector(".promo-slider");
	const slides = promoSlider.querySelectorAll(".swiper-slide");

	slides.forEach((slide) => {
		const config = {
			attributes: true,
		};

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				const animText =
					mutation.target.querySelector('[area="promoText"]');
				const animButton = mutation.target.querySelector(
					'[area="promoButton"]'
				);

				if (mutation.target.classList.contains("swiper-slide-active")) {
					gsap.from(animText, {
						opacity: 0,
						translateY: 15,
					});
					gsap.to(animText, {
						delay: 0.8,
						opacity: 1,
						translateY: 0,
						duration: 1.2,
					});
					gsap.from(animButton, {
						opacity: 0,
						translateY: 15,
					});
					gsap.to(animButton, {
						delay: 0.8,
						opacity: 1,
						translateY: 0,
						duration: 1.2,
					});
				}
			});
		});
		observer.observe(slide, config);
	});
}
