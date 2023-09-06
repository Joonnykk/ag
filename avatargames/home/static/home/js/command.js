import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const showImagesCommand = () => {
  gsap.registerPlugin(ScrollTrigger);

  const block = document.querySelector('[area="our-command"]');

  const items = gsap.utils.toArray(block.querySelectorAll(".images"));

  items.forEach((item, i) => {
    if (i === 0) {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "center bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }
    if (i === 1) {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "center bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }
  });
};
