import { Select, Collapse, initTE } from "tw-elements";

export const accordionQuestion = () => {
	const accordion = document.getElementById("accordionExample");

	const buttons = accordion.querySelectorAll("button");
	const texts = accordion.querySelectorAll('[area="textQuestion"]');

	initTE({ Collapse });
	buttons.forEach((button, i) => {
		if (i != 0) {
			buttons[i].setAttribute("data-te-collapse-collapsed", "");
		}
	});

	texts.forEach((text, i) => {
		if (i === 0) {
			texts[i].setAttribute("data-te-collapse-show", "");
		}
	});
};

export const electFooterQuestion = () => {
	initTE({ Select });
	const singleSelect = document.querySelector("#formSelect");
	const singleSelectInstance = Select.getInstance(singleSelect);
	singleSelectInstance.setValue("4");
};
