import Inputmask from "inputmask";
import countries from "./countries.js";

const orderForm = document.querySelector('section[data-role="order-form"]');
const testForm = document.querySelector('section[data-role="test-form"]');

const closeTestFormBtn = document.querySelector(
	'button[data-role="close-test-form"]'
);
const openTestFormBtns = document.querySelectorAll(
	'button[data-role="open-test-form"]'
);
const closeOrderFormBtn = document.querySelector(
	'button[data-role="close-order-form"]'
);
const openOrderFormBtns = document.querySelectorAll(
	'button[data-role="open-order-form"]'
);

const successMessage = document.querySelector("#successMessage");
const successMessageClose = document.querySelector("#successMessage button");

const phoneInputs = document.querySelectorAll('input[type="tel"]');

let activeMask = "+7 (999) 999-99-99";

export const phoneInputsInit = () => {
	window.addEventListener("load", () => {
		phoneInputs.forEach((input) => {
			Inputmask({
				mask: "+7 (999) 999-99-99",
			}).mask(input);

			input.placeholder = activeMask;

			input.addEventListener("blur", () => {
				input.placeholder = activeMask;
			});

			const phoneSelectTrigger = input.parentNode.querySelector(
				".phone-select-trigger"
			);
			const phoneSelectTriggerImg = input.parentNode.querySelector(
				".phone-select-trigger img"
			);
			const phoneSelectData =
				input.parentNode.querySelector(".phone-select-data");

			if (phoneSelectTrigger && phoneSelectData) {
				phoneSelectTrigger.addEventListener("click", () => {
					phoneSelectData.getAttribute("aria-hidden") === "true"
						? phoneSelectData.setAttribute("aria-hidden", "false")
						: phoneSelectData.setAttribute("aria-hidden", "true");
				});

				const ul = document.createElement("ul");
				ul.classList.add("flex", "flex-col", "gap-y-4", "px-4", "py-5");

				const listItems = countries.map((item) => {
					const li = document.createElement("li");
					li.setAttribute("data-value", item.value);
					li.setAttribute("data-image", item.src);
					li.setAttribute("data-mask", `${item.value} ${item.mask}`);
					li.classList.add(
						"flex",
						"items-center",
						"gap-2",
						"relative",
						"hover:cursor-pointer",
						"hover:text-[#6A35FF]"
					);

					const divFirst = document.createElement("div");
					const image = document.createElement("img");
					image.setAttribute("src", `/images/countries/${item.src}`);
					image.setAttribute("loading", `lazy`);
					image.setAttribute("alt", item.name);
					divFirst.appendChild(image);

					const divLast = document.createElement("div");
					divLast.innerHTML = `${item.name} (${item.value})`;

					const divLayer = document.createElement("div");
					divLayer.classList.add("absolute", "inset-0", "z-30");

					li.appendChild(divFirst);
					li.appendChild(divLast);
					li.appendChild(divLayer);
					li.addEventListener("click", (event) => {
						const li = event.target.parentNode;
						const src = li.getAttribute("data-image");
						const mask = li.getAttribute("data-mask");

						phoneSelectTriggerImg.setAttribute(
							"src",
							`/images/countries/${src}`
						);
						input.placeholder = mask;
						Inputmask({
							mask: mask,
						}).mask(input);
						activeMask = mask;
						phoneSelectData.setAttribute("aria-hidden", "false");
						input.focus();
					});

					return li;
				});

				listItems.forEach((li) => {
					ul.appendChild(li);
				});

				phoneSelectData.appendChild(ul);
			}
		});
	});
};

const formOrder = document.querySelector('section[data-role="order-form"]');
const nameOrder = formOrder.querySelector('input[name="name"]');
const phoneOrder = formOrder.querySelector('input[type="tel"]');
const emailOrder = formOrder.querySelector('input[type="email"]');
const submitOrder = formOrder.querySelector("#orderForm-submit");
const nameOrderError = nameOrder.parentNode.querySelector("p");
const phoneOrderError = phoneOrder.parentNode.querySelector("p");

const formTest = document.querySelector('section[data-role="test-form"]');
const nameTest = formTest ? formTest.querySelector('input[name="name"]') : null;
const phoneTest = formTest ? formTest.querySelector('input[type="tel"]') : null;
const emailTest = formTest
	? formTest.querySelector('input[type="email"]')
	: null;
const submitTest = formTest ? formTest.querySelector("#testForm-submit") : null;
const nameTestError = formTest ? nameTest.parentNode.querySelector("p") : null;
const phoneTestError = formTest
	? phoneTest.parentNode.querySelector("p")
	: null;

const isValidForm = (name, phone) => {
	return name && phone;
};

export const orderFormValidate = () => {
	let isValid = {
		name: false,
		phone: false,
	};

	nameOrder.addEventListener("blur", (event) => {
		const value = event.target.value;

		if (value === "") {
			isValid.name = false;
			nameOrderError.innerHTML = "Поле обязательно к заполнению!";
			nameOrderError.setAttribute("aria-hidden", "false");
		}
		// else if (/[^a-zA-Zа-яА-Я]/gm.test(value)) {
		//     isValid.name = false
		//     nameOrderError.innerHTML = "Поле содержит не допустимые символы!"
		//     nameOrderError.setAttribute('aria-hidden', 'false')
		// }
		else {
			isValid.name = true;
			nameOrderError.innerHTML = "no error";
			nameOrderError.setAttribute("aria-hidden", "true");
		}

		if (isValidForm(isValid.name, isValid.phone)) {
			submitOrder.disabled = false;
		} else {
			submitOrder.disabled = true;
		}
	});

	phoneOrder.addEventListener("blur", (event) => {
		const value = event.target.value;

		if (value === "") {
			isValid.phone = false;
			phoneOrderError.innerHTML = "Поле обязательно к заполнению!";
			phoneOrderError.setAttribute("aria-hidden", "false");
		} else if (/\_/gm.test(value)) {
			isValid.phone = false;
			phoneOrderError.innerHTML = "Не коректный номер телефона!";
			phoneOrderError.setAttribute("aria-hidden", "false");
		} else {
			isValid.phone = true;
			phoneOrderError.innerHTML = "no error";
			phoneOrderError.setAttribute("aria-hidden", "true");
		}

		if (isValidForm(isValid.name, isValid.phone)) {
			ym(92197085, "reachGoal", "fillForm");
			submitOrder.disabled = false;
		} else {
			submitOrder.disabled = true;
		}
	});
};

export const orderFormSubmit = () => {
	submitOrder.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();

		let data = {
			phone: phoneOrder.value,
			email: emailOrder.value,
			name: nameOrder.value,
			type: "Заявка на франшизу",
		};

		fetch("/mailer.php", { method: "POST", body: JSON.stringify(data) })
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data.success) {
					ym(92197085, "reachGoal", "fetchForm");
					orderForm.setAttribute("aria-hidden", "true");
					nameOrderError.innerHTML = "no error";
					nameOrderError.setAttribute("aria-hidden", "true");
					phoneOrderError.innerHTML = "no error";
					phoneOrderError.setAttribute("aria-hidden", "true");
					nameOrder.value = "";
					phoneOrder.value = "";
					emailOrder.value = "";
					successMessage.setAttribute("aria-hidden", "false");
				} else {
					throw new Error();
				}
			})
			.catch(() => {
				console.error();
			});
	});
};

export const testFormSubmit = () => {
	if (submitTest) {
		submitTest.addEventListener("click", (event) => {
			event.preventDefault();
			event.stopPropagation();

			let data = {
				phone: phoneOrder.value,
				email: emailOrder.value,
				name: nameOrder.value,
				type: "Заявка на test",
			};

			fetch("/mailer.php", { method: "POST", body: JSON.stringify(data) })
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.success) {
						testForm.setAttribute("aria-hidden", "true");
						nameTestError.innerHTML = "no error";
						nameTestError.setAttribute("aria-hidden", "true");
						phoneTestError.innerHTML = "no error";
						phoneTestError.setAttribute("aria-hidden", "true");
						nameTest.value = "";
						phoneTest.value = "";
						emailTest.value = "";
						successMessage.setAttribute("aria-hidden", "false");
					} else {
						throw new Error();
					}
				})
				.catch(() => {
					console.error();
				});
		});
	}
};

export const testFormValidate = () => {
	if (testForm) {
		let isValid = {
			name: false,
			phone: false,
		};

		nameTest.addEventListener("blur", (event) => {
			const value = event.target.value;

			if (value === "") {
				isValid.name = false;
				nameTestError.innerHTML = "Поле обязательно к заполнению!";
				nameTestError.setAttribute("aria-hidden", "false");
			} else if (/[^a-zA-Zа-яА-Я]/gm.test(value)) {
				isValid.name = false;
				nameTestError.innerHTML =
					"Поле содержит не допустимые символы!";
				nameTestError.setAttribute("aria-hidden", "false");
			} else {
				isValid.name = true;
				nameTestError.innerHTML = "no error";
				nameTestError.setAttribute("aria-hidden", "true");
			}

			if (isValidForm(isValid.name, isValid.phone)) {
				submitTest.disabled = false;
			} else {
				submitTest.disabled = true;
			}
		});

		phoneTest.addEventListener("blur", (event) => {
			const value = event.target.value;

			if (value === "") {
				isValid.phone = false;
				phoneTestError.innerHTML = "Поле обязательно к заполнению!";
				phoneTestError.setAttribute("aria-hidden", "false");
			} else if (/\_/gm.test(value)) {
				isValid.phone = false;
				phoneTestError.innerHTML = "Не коректный номер телефона!";
				phoneTestError.setAttribute("aria-hidden", "false");
			} else {
				isValid.phone = true;
				phoneTestError.innerHTML = "no error";
				phoneTestError.setAttribute("aria-hidden", "true");
			}

			if (isValidForm(isValid.name, isValid.phone)) {
				submitTest.disabled = false;
			} else {
				submitTest.disabled = true;
			}
		});
	}
};

export const orderFormInit = () => {
	orderFormValidate();
	orderFormSubmit();
	testFormValidate();
	testFormSubmit();

	if (successMessage && successMessageClose) {
		successMessageClose.addEventListener("click", () => {
			successMessage.setAttribute("aria-hidden", "true");
		});
	}

	if (closeTestFormBtn && formTest) {
		closeTestFormBtn.addEventListener("click", () => {
			testForm.setAttribute("aria-hidden", "true");
			nameTestError.innerHTML = "no error";
			nameTestError.setAttribute("aria-hidden", "true");
			phoneTestError.innerHTML = "no error";
			phoneTestError.setAttribute("aria-hidden", "true");
			nameTest.value = "";
			phoneTest.value = "";
			emailTest.value = "";
		});
	}

	if (openTestFormBtns.length > 0 && formTest) {
		openTestFormBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				testForm.setAttribute("aria-hidden", "false");
			});
		});
	}

	if (closeOrderFormBtn) {
		closeOrderFormBtn.addEventListener("click", () => {
			orderForm.setAttribute("aria-hidden", "true");
			nameOrderError.innerHTML = "no error";
			nameOrderError.setAttribute("aria-hidden", "true");
			phoneOrderError.innerHTML = "no error";
			phoneOrderError.setAttribute("aria-hidden", "true");
			nameOrder.value = "";
			phoneOrder.value = "";
			emailOrder.value = "";
		});
	}

	if (openOrderFormBtns.length > 0) {
		openOrderFormBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				orderForm.setAttribute("aria-hidden", "false");
			});
		});
	}
};

// let myDropzone = new Dropzone("div#fileInput", {
//     url: "/file/post",
//     acceptedFiles: 'application/pdf, image/png, image/jpeg, application/msword',
//     createImageThumbnails: false,
//     maxFiles: 1,
//     previewTemplate: `<div class="dz-preview dz-file-preview">
//                           <div class="dz-image">
//                             <img data-dz-thumbnail />
//                           </div>
//                           <div class="dz-details">
//                             <div class="icon-wrap">
//                                 <div>
//                                     <div>
//                                         <svg id="fileInput_fileIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M9.33366 1.51301V4.26671C9.33366 4.64008 9.33366 4.82676 9.40632 4.96937C9.47024 5.09481 9.57222 5.1968 9.69766 5.26071C9.84027 5.33337 10.027 5.33337 10.4003 5.33337H13.154M13.3337 6.65886V11.4667C13.3337 12.5868 13.3337 13.1469 13.1157 13.5747C12.9239 13.951 12.618 14.257 12.2416 14.4487C11.8138 14.6667 11.2538 14.6667 10.1337 14.6667H5.86699C4.74689 14.6667 4.18683 14.6667 3.75901 14.4487C3.38269 14.257 3.07673 13.951 2.88498 13.5747C2.66699 13.1469 2.66699 12.5868 2.66699 11.4667V4.53337C2.66699 3.41327 2.66699 2.85322 2.88498 2.42539C3.07673 2.04907 3.38269 1.74311 3.75901 1.55136C4.18683 1.33337 4.74689 1.33337 5.86699 1.33337H8.00818C8.49736 1.33337 8.74195 1.33337 8.97212 1.38863C9.17619 1.43763 9.37128 1.51844 9.55023 1.62809C9.75206 1.75178 9.92501 1.92473 10.2709 2.27063L12.3964 4.39612C12.7423 4.74202 12.9153 4.91497 13.0389 5.1168C13.1486 5.29575 13.2294 5.49084 13.2784 5.69491C13.3337 5.92509 13.3337 6.16968 13.3337 6.65886Z" stroke="current" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="flex flex-col">
//                                 <div class="dz-error-message">
//                                     <span data-dz-errormessage></span>
//                                 </div>
//                                 <div class="dz-filename"><span data-dz-name></span></div>
//                                 <div class="dz-size"><span data-dz-size></span></div>
//                             </div>
//                           </div>
//                           <div class="dz-progress">
//                             <span class="dz-upload" data-dz-uploadprogress></span>
//                           </div>
//                           <div class="dz-error-mark">
//                             <button class="dz-error-mark_button">
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996" stroke="#D92D20" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
//                                 </svg>
//                             </button>
//                           </div>
//                           <div class="dz-success-mark">
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#6A35FF"/>
//                                 <path d="M14.6663 6.5L8.24967 12.9167L5.33301 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                                 <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#6A35FF"/>
//                             </svg>
//                           </div>
//                       </div>`,
//     dictResponseError: 'Загрузка не удалась',
//     dictDefaultMessage: `<div class="flex flex-col justify-center items-center">
//                             <div class="download-icon">
//                                 <div>
//                                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613" stroke="#3A3A4A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <p class="text-center">
//                                 <span class="text-[14px] leading-[20px] text-[#6A35FF]">Загрузить файл</span>
//                                 <span class="text-[14px] leading-[20px]">или перетащите в зону <br> PDF, DOC, JPG или PNG</span>
//                             </p>
//                         </div>`
// });
