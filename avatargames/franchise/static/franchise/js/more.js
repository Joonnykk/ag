import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const animation = (start, end) => {

        gsap.fromTo('.eighteenthScene',
            {
                translateY: '100%'
            },
            {
                translateY: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: '.eighteenthScene',
                    start: `${start} bottom`,
                    end: `${end} bottom`,
                    scrub: 1,
                }
            })
}

export const moreAnimation = () => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
        animation('top-=250px', 'top+=100px')
    })

    mm.add('(max-width: 1023px)', () => {
        animation('top-=350px', 'top+=100px')
    })
}
