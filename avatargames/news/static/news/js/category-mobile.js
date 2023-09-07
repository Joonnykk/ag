const categoryDropdown = document.querySelector(".category-mobile-dropdown");
const input =
	categoryDropdown.parentElement.querySelector("input[type='text']");
const dropdownList = categoryDropdown.parentElement.querySelector(
	".dropdown-list-category"
);
const dropdownItems = dropdownList.parentElement.querySelectorAll("li");
const arrow = categoryDropdown.querySelector('[data-role="arrow"]');

const currentValueInput = () => {
	dropdownItems.forEach((item) => {
		input.value = dropdownItems[0].innerText;
		dropdownItems[0].classList.add("active");
		item.addEventListener("click", () => {
			dropdownItems.forEach((item) => {
				item.classList.remove("active");
			});
			input.value = item.innerText;
			item.classList.add("active");
			dropdownList.setAttribute("data-open", "false");
			arrow.classList.add("rotate-180");
			input.classList.remove("open");
		});
	});
};

const clickInput = () => {
	input.addEventListener("click", () => {
		if (dropdownList.getAttribute("data-open") === "true") {
			dropdownList.setAttribute("data-open", "false");
			arrow.classList.add("rotate-180");
			input.classList.remove("open");
		} else {
			dropdownList.setAttribute("data-open", "true");
			arrow.classList.remove("rotate-180");
			input.classList.add("open");
		}
	});
};

export const inputCategory = () => {
	if (categoryDropdown) {
		clickInput();
		currentValueInput();
	}
};
