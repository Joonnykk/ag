import { defineConfig } from 'vite'
import djangoVite from 'django-vite-plugin'
import glob from 'glob'

export default defineConfig({
    plugins: [
        djangoVite({
            input:[
                './agsite/js/app.js',
                './agsite/css/style.css',
                ...glob.sync('static/**/*.{js,css}'),
            ]
        })
    ],
});