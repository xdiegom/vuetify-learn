<template>
<div>
  <v-container fluid text-xs-center>
    <v-layout row>
      <v-flex xs1 sm1 md1 lg1>
        <router-link class="btn flat primary" :to="{ name: 'home'}">go Back</router-link>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12 md12 lg12>
        <h3>Layouts</h3>
      </v-flex>
    </v-layout>
    <v-layout grid-list-sm v-bind="binding">
      <v-flex v-for="r in routes" :key="r.name">
        <router-link
                class="btn btn--flat red--text"
                :to="{ name: r.route}"
                :disabled="r.disabled">
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
      routes: [
        {
          name: 'Grid',
          route: 'layouts.grid',
          disabled: false
        },
        {
          name: 'Offset',
          route: 'layouts.offset',
          disabled: false
        },
        {
          name: 'Order',
          route: 'layouts.order',
          disabled: false
        },
        {
          name: 'Direction and Align',
          route: 'layouts.diralign',
          disabled: false
        },
        {
          name: 'Row Column Based',
          route: 'layouts.row-column-based',
          disabled: false
        },
        {
          name: 'Nested grid',
          route: 'layouts.nested-grid',
          disabled: true
        }
      ]
    }
  },
  computed: {
    binding() {
      const binding = {}
      if (this.$vuetify.breakpoint.xsOnly) binding.column = true

      return binding
    }
  }

}
</script>
