import { defineConfig } from 'vite'
import djangoVite from 'django-vite-plugin'
import glob from 'glob'

export default defineConfig({
    base: '/static/',
    plugins: [
        djangoVite({
            input:[
                './avatargames/js/common.js',
                './avatargames/css/common.css',
                './home/js/home.js',
                './home/css/home.css',
                './franchise/js/franchise.js',
                './franchise/css/franchise.css',
                './questions/js/questions.js',
                './questions/css/questions.css',
                './policy/js/policy.js',
                './policy/css/policy.css',
                './comming_soon/js/comming_soon.js',
                './comming_soon/css/comming_soon.css',
                ...glob.sync('static/**/*.{js,css}'),
            ]
        })
    ],
});