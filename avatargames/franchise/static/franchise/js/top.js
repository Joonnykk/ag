import {gsap} from "gsap";

export const topAnimation = () => {

        const tl = gsap.timeline()
        const tl2 = gsap.timeline()
        tl.to('.firstScene-games-col-1',
            {
                translateY: 50,
                duration: 5,
            }, '<')
            .to('.firstScene-games-col-2',
            {
                translateY: 100,
                duration: 3
            }, '<')
            .to('.firstScene-games-col-3',
            {
                translateY: 60,
                duration: 5,
            }, '<')
            .to('.firstScene-games-col-4',
                {
                    translateY: 110,
                    duration: 3
                }, '<')
            .to('.firstScene-games-col-5',
                {
                    translateY: 140,
                    duration: 5,
                }, '<')

        tl2.fromTo('.firstScene .logo',
                {
                    translateY: '100%',
                    opacity: 0
                },
                {
                    translateY: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 1
                },  '<')
            .fromTo('.firstScene h1',
                {
                    translateY: '100%',
                    opacity: 0
                },
                {
                    translateY: 0,
                    opacity: 1,
                    duration: 0.8
                },  '<')
            .fromTo('.firstScene p',
                {
                    translateY: '100%',
                    opacity: 0
                },
                {
                    translateY: 0,
                    opacity: 1,
                    duration: 0.8
                },  '<')
            .fromTo('.firstScene .icons',
                {
                    translateY: '100%',
                    opacity: 0
                },
                {
                    translateY: 0,
                    opacity: 1,
                    duration: 0.8
                },  '<')
            .fromTo('.firstScene .actions',
                {
                    translateY: '100%',
                    opacity: 0
                },
                {
                    translateY: 0,
                    opacity: 1,
                    duration: 0.8
                },  '<')
            .fromTo('.firstScene-end',
                {
                    translateY: '100%',
                    opacity: 0
                },
                {
                    translateY: 0,
                    opacity: 1,
                    duration: 0.8
                },  '<')
}
