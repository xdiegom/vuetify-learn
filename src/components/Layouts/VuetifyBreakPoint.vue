<template>
<v-layout>
  <v-flex xs12>
    <v-btn class="amber black--text" @click.prevent="dialog=true">Open Dialog</v-btn>
  </v-flex>
  <v-dialog v-model="dialog" :fullscreen="$vuetify.breakpoint.xsOnly">
    <v-card>
      <v-card-text>Dialog</v-card-text>
      <v-card-actions>
        <v-btn class="secondary amber--text" @click.stop="dialog=false" dark>Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      dialog: false
    }
  },
  mounted() {
    this.$vuetify.load(this.init)
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, {
        passive: true
      })
    }
  },
  methods: {
    init() {
      this.onResize()
      window.addEventListener('resize', this.onResize, {
        passive: true
      })
    },
    onResize() {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>
