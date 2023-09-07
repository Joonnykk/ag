const categoryList = document.querySelector(".desktop-list-category");
const buttonsCategory = categoryList.parentElement.querySelectorAll("button");

const clickButton = () => {
	buttonsCategory.forEach((button) => {
		buttonsCategory[0].classList.add("active");
		button.addEventListener("click", () => {
			buttonsCategory.forEach((button) => {
				button.classList.remove("active");
			});
			button.classList.add("active");
		});
	});
};

export const categoryDesktop = () => {
	if (categoryList) {
		clickButton();
	}
};
