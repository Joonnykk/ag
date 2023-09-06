import "swiper/css";
import "../css/promo.css";
import "../css/numbers.css";

import { textAnimateMain } from "./main.js"

import {
	promoSlider
} from "./promo.js"

import { showGameCard } from "./games.js"
import { showElemetsWorld } from "./worldVR.js"
import { marqueeAnimateRow } from "./news.js"
import { showImagesCommand } from "./command.js";

// Promo slider
promoSlider()

// News row
marqueeAnimateRow('[area="newsRowTop"]', 6);
marqueeAnimateRow('[area="newsRowBottom"]', 5);

// GSAP Animation
// showElementsInSlide();
showGameCard()
showElemetsWorld()
showImagesCommand()
textAnimateMain()