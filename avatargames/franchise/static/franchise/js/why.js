import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export const whyAnimation = () => {

    const gs = gsap.matchMedia()

    gs.add("(max-width: 1023px)", () => {
        gsap.fromTo(".why",
            {
                scale: 1.3
            },
            {
                duration: 0.8,
                scale: 1,
                scrollTrigger: {
                    trigger: '.sevenScene',
                    start: '20% 80%'
                }
            })

        gsap.fromTo(".why-info",
            {
                translateY: 500
            },
            {
                duration: 0.8,
                translateY: 0,
                scrollTrigger: {
                    trigger: '.sevenScene',
                    start: '20% 80%'
                }
            })
    })

    gs.add("(min-width: 1024px)", () => {
        gsap.fromTo(".why",
            {
                scale: 2.5
            },
            {
                duration: 0.8,
                scale: 1,
                scrollTrigger: {
                    trigger: '.sevenScene',
                    start: '20% 80%'
                }
            })

        gsap.fromTo(".why-info",
            {
                translateY: 500
            },
            {
                duration: 0.8,
                translateY: 0,
                scrollTrigger: {
                    trigger: '.sevenScene',
                    start: '20% 80%'
                }
            })
    })
}
