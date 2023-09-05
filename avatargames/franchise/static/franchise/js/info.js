import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const sections = gsap.utils.toArray('.eightScene-animate')

const animation = () => {
    if (sections.length > 0) {
        sections.forEach(item => {
            gsap.fromTo(item, {
                    translateY: 50
                },
            {
                translateY: 0,
                scrollTrigger: {
                    trigger: item,
                    start: "top-=500 center",
                    end: "top-=200 center",
                    scrub: 1,
                    duration: .5
                }
            })
        })
    }
}

export const infoAnimation = () => {
    animation()
}
