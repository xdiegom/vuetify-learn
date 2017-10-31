<template>
<v-layout row wrap>
  <v-flex xs12>
    <h5>Offset</h5>
    <v-card-text>
      Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely
      to your needs.
    </v-card-text>
  </v-flex>
  <v-flex xs10 offset-xs1>
    <v-card dark color="orange">
      <v-card-text>xs10 offset-xs1</v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs7 offset-xs5>
    <v-card dark color="secondary">
      <v-card-text>xs7 offset-xs5</v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs12 sm5 md2>
    <v-card dark color="primary">
      <v-card-text>xs5</v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs12 sm5 md3 offset-xs0 offset-md2>
    <v-card dark color="brown">
      <v-card-text>xs5 offset-xs2</v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {}
</script>
