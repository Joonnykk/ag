import '../css/news.css'
import '../css/category-mobile.css'

import { inputCategory } from "./category-mobile.js";
import { categoryDesktop } from "./category-desktop.js";

window.addEventListener("DOMContentLoaded", () => {
	inputCategory();
	categoryDesktop();

	const newsTypes = document.querySelectorAll('#news-types input')

    const getSearchString = () => {
        let params = []

        newsTypes.forEach(checkbox => {
            if (!checkbox.checked) {
                    params.push(checkbox.value)
                }
        })

        if (params.length > 0) {
            const search = params.map(val => `ignore=${val}`).join('&')
            document.location.search = `?${search}`
        } else {
            document.location.search = ''
        }

    }


	if (newsTypes) {
	    newsTypes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                getSearchString()
            })
        })
	}
})