<template>
<div>
  <v-container>
    <v-layout row wrap align-center justify-center class="h100">
      <v-flex xs12 offset-xs3>
        <h1>Hello to Vuetify</h1>
      </v-flex>
      <v-flex xs1>
        <router-link class="btn primary--text" :to="{ name: 'layouts'}">Layouts</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {}
</script>
