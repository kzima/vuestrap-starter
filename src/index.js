import 'vuestrap/core'
import card from 'vuestrap-base-components/src/components/card'
import navbar from 'vuestrap-base-components/src/components/navbar'
import jumbotron from 'vuestrap-base-components/src/components/jumbotron'
import modal from 'vuestrap-base-components/src/components/modal'

window.app = new Vue({
  el: '#app',
   components: {
     'card': card,
     'navbar': navbar,
     'jumbotron': jumbotron,
     'modal': modal
   }
})
