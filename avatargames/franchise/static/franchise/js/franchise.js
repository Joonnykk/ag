import { topAnimation } from "./top.js";
import { cardsAnimation } from "./cards.js";
import { countriesAnimation } from "./countries.js";
import { gamesAnimation } from "./games.js";
import { whyAnimation } from "./why.js";
import { infoAnimation } from "./info.js";
import { advantagesAnimation } from "./advantages/main.js"

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import '../css/franchise.css'
import '../css/top.css'
import '../css/cards.css'
import '../css/profit.css'
import '../css/games.css'
import '../css/why.css'
import '../css/info.css'
import '../css/advantages.css'

window.addEventListener("DOMContentLoaded", () => {
	topAnimation()
    cardsAnimation()
    countriesAnimation()
    gamesAnimation()
    whyAnimation()
    infoAnimation()
    advantagesAnimation()
})