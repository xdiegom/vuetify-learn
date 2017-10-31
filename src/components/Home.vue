<template>
<div>
  <v-container>
    <v-layout justify-center items-center row class="h100">
      <h1>Hello to Vuetify</h1>
    </v-layout>
  </v-container>
  <v-container>
    <v-layout justify-center row>
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
