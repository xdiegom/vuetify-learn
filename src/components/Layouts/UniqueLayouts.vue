<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h5>Unique Layouts</h5>
        <v-card-text>
          The power and flexiblity of the Vuetify grid system allows you to create amazing user interfaces.
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-layout row wrap secondary>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="blue-grey" dark tile flat>
              <v-card-text v-text="lorem">
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="brown" dark tile flat>
              <v-card-text v-text="lorem">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm7>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo lighten-2" dark tile flat>
              <v-card-text v-text="lorem.join().slice(0, 70)">
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row>
              <v-flex d-flex v-for="n in 2" :key="n">
                <v-card color="amber lighten-2" tile flat>
                  <v-card-text v-text="lorem.join().slice(0, 40)">
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm2 child-flex>
        <v-card color="orange lighten-2" tile flat>
          <v-card-text v-text="lorem.join().slice(0, 90)">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text v-text="lorem.join().slice(0, 100)">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
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
