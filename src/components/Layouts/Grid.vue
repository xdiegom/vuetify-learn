<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h5>Grid</h5>
        <v-card-text>
          The <code class="red--text">v-container</code> can be used for a center focused page,
          or given the <code class="red--text">fluid</code> prop to extend its full width.
          <code class="red--text">v-layout </code> is used for separating sectionsand contains
          the <b>v-flex</b>. The structure of your layout will be as follows, <b>v-container</b> »
          <b>v-layout</b> » <b>v-flex</b>. Each part of the grid chain is a flex-box
          element. The final, <b>v-flex</b>, automatically sets its children to
          have <code class="grey white--text darken-3">flex: 1 1 auto</code>.
        </v-card-text>
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
</template>

<script>
export default {}
</script>
