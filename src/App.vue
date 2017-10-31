<template>
  <v-app>
  <!-- <v-navigation-drawer enable-resize-watcher app></v-navigation-drawer>
  <v-toolbar dark color="blue" app></v-toolbar> -->
  <main>
    <v-content>
        <router-view></router-view>
    </v-content>
  </main>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
import Layouts from './components/Layouts/Index.vue'
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
