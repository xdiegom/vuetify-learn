<template>
<v-layout row wrap>
  <v-flex xs12>
    <h5>Nested Grid</h5>
      <v-card-text>
        Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.
      </v-card-text>
  </v-flex>
  <v-flex d-flex xs12 sm6 md4>
    <v-card color="purple" dark>
      <v-card-title primary class="title">Lorem</v-card-title>
      <v-card-text text-xs-right text-lg-right v-text="lorem.join()"></v-card-text>
    </v-card>
  </v-flex>
  <v-flex d-flex xs12 sm6 md3>
    <v-layout row wrap>
      <v-flex d-flex>
        <v-card color="indigo" dark>
          <v-card-text v-text="lorem.join().slice(0,70)">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex>
        <v-layout row wrap>
          <v-flex d-flex v-for="n in 2" :key="n">
            <v-card color="red lighten-2" dark>
              <v-card-text v-text="lorem.join().slice(0,40)"></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
  <v-flex d-flex xs12 sm6 md2>
    <v-card color="green lighten-2" dark>
      <v-card-text v-text="lorem.join().slice(0,90)"></v-card-text>
    </v-card>
  </v-flex>
  <v-flex d-flex xs12 sm6 md3>
    <v-card color="blue lighten-2" dark>
      <v-card-text v-text="lorem.join().slice(0, 100)">
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      lorem: [
        "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus,",
        "nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi",
        "vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."
      ]
    }
  }
}
</script>
