<template>
<div>
  <v-layout row wrap>
    <v-flex xs12>
      <h5>Direction and Align</h5>
      <v-card-text>
        Dynamically change your layout based upon resolution. <b>(resize your screen
        and watch the layout change to a <code>row</code> on small breakpoints)</b>
      </v-card-text>
    </v-flex>
  </v-layout>
  <v-layout v-bind="binding">
    <v-flex>
      <v-card dark color="primary">
        <v-card-text>one</v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card dark color="secondary">
        <v-card-text>two</v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card dark color="accent">
        <v-card-text>three</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  computed: {
    binding() {
      const binding = {}

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

      return binding
    }
  }
}
</script>
