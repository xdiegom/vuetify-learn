<template>
<v-app>
  <main>
    <v-content>
      <router-view></router-view>
      <v-footer app></v-footer>      
    </v-content>
  </main>
</v-app>
</template>

<script>
import Layouts from './components/Layouts/Index.vue'
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
