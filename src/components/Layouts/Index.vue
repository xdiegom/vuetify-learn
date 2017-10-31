<template>
<div>
  <v-container grid-list-md fluid text-xs-center>
    <v-layout row>
      <v-flex xs1 sm1 md1 lg1>
        <router-link class="btn flat primary" :to="{ name: 'home'}">go Back</router-link>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12>
        <h3>Layouts</h3>
      </v-flex>
      <v-flex lg1 md1 sm1 xs4 v-for="n in 12" :key="n">
        <v-card color="secondary" dark>
          <v-card-text>1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row :wrap="doWrap">
      <v-flex lg12 xs4 sm4 v-for="r in routes" :key="r.name">
        <router-link class="btn btn--flat red--text" :to="{ name: r.route}">
          {{r.name}}
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout class="pb-3" row>
      <v-flex lg12 md12 sm12 xs12>
        <v-card dark color="black--text white">
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      routes: [{
          name: 'Grid',
          route: 'layouts.grid'
        },
        {
          name: 'Offset',
          route: 'layouts.offset'
        },
        {
          name: 'Order',
          route: 'layouts.order'
        },
        {
          name: 'Direction and Align',
          route: 'layouts.diralign'
        },
        {
          name: 'Row Column Based',
          route: 'layouts.row-column-based'
        },
        {
          name: 'Nested grid',
          route: 'layouts.nested-grid'
        },
        {
          name: 'Unique Layouts',
          route: 'layouts.unique-layouts'
        },
        {
          name: 'Specific Tags',
          route: 'layouts.specific-tags'
        },
        {
          name: 'Vuetify Breakpoints',
          route: 'layouts.breakpoints'
        }
      ]
    }
  },
  computed: {
    doWrap () {
      return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly
    }
  }
}
</script>
