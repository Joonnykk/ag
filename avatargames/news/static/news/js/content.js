const content = document.querySelector(".content-articles");
const buttonTags = content.querySelectorAll("button");

export const handlerButton = () => {
	buttonTags.forEach((tag) => {
		tag.addEventListener("click", (event) => {
			event.stopPropagation();
		});
	});
};

export const articlesEvents = () => {
	handlerButton();
};
