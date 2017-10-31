<template>
<div>
  <v-layout row wrap>
    <v-flex xs12>
      <h5>Grid</h5>
      <v-card dark color="orange">
        <v-card-text class="px-0">12</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs6 v-for="i in 2" :key="i">
      <v-card dark color="purple">
        <v-card-text class="px-0">6</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs1 v-for="i in 12" :key="i">
      <v-card dark color="green">
        <v-card-text>1</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {}
</script>
