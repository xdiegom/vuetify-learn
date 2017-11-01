<template>

<v-container fill-height>
    <v-layout flex wrap align-center justify-center>
      <v-flex xs12 class="text-xs-center">
        <h1>Hello to Vuetify</h1>
        <router-link tag="div" :to="{ name: 'layouts'}" exact>
          <v-btn  flat color="primary">Layouts</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
</v-container>

</template>

<script>

export default {}

</script>
