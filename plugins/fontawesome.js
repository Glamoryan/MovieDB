// plugins/fontawesome.js
import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

export default defineNuxtPlugin(nuxtApp => {
    library.add(fasStar, farStar)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
