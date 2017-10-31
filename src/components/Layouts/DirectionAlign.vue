<template>
<div>
  <v-layout row wrap>
    <v-flex xs12>
      <h5>Direction and Align</h5>
      <v-card-text>
        Designate the direction and alignment in a variety of ways. All of the
        available <code class="grey white--text darken-3">flex-box</code> api is available through intuitive helper props.
      </v-card-text>
    </v-flex>
  </v-layout>
  <v-layout row justify-space-between>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text>one</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="secondary">
        <v-card-text>two</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="accent">
        <v-card-text>three</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row justify-space-around>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text>one</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="secondary">
        <v-card-text>two</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="accent">
        <v-card-text>three</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row justify-center>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text>one</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="secondary">
        <v-card-text>two</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="accent">
        <v-card-text>three</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {}
</script>
