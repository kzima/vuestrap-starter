import 'vuestrap/core'
import card from 'vuestrap-base-components/src/components/card'
import {nav, navItem} from 'vuestrap-base-components/src/components/nav'
import navbar from 'vuestrap-base-components/src/components/navbar'
import jumbotron from 'vuestrap-base-components/src/components/jumbotron'
import modal from 'vuestrap-base-components/src/components/modal'

window.app = new Vue({
  el: '#app',
   components: {
		'vs-modal': modal,
    'vs-nav': nav,
    'vs-nav-item': navItem,
    'vs-navbar': navbar,
    'vs-jumbotron': jumbotron,
    'vs-card': card
   }
})
