<template>
  <v-layout grid-list-xs row wrap>
    <v-flex xs12>
      <h5 class="text-xs-center">Specific Tags</h5>
      <v-card-text>
        Sometimes you will want to specify a layout item as a specific tag, such as a section or li element.
      </v-card-text>
    </v-flex>
    <v-flex tag="h3" class="text-xs-left">Caliche Ipsum</v-flex>
    <v-flex d-flex xs12 order-xs5>
      <v-layout column>
        <v-flex>
          <v-card flat>
            <v-card-text v-text="caliche.join().slice(0, 500)"></v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card flat>
            <v-card-text v-text="caliche.join().slice(0, 500)"></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      caliche: [
        "Caliche ipsum Jesusiar dolor Chololas sit Quiacercito amet, Coquiar consectetur Julón adipiscing Juelgo elit. Bolado Quare Uñudo attende, Jarana quaeso. Cuña At Lombriciento coluit Jumba ipse Cojonudo amicitias. Mono Sed Bichada quot Chindondo homines, Empacho tot Cuica sententiae; Agilamiento Duo Cabieron Reges: Aguambado constructio Engatusar interrete. Paila Quamquam Broza tu Pieses hanc Chorqueto copiosiorem Chimpinilla etiam Jetudo soles Chaparro dicere.",
        "Restinguet Cherche citius, Atalsatado si Morro ardentem Polla acceperit. Zurumbeto Utilitatis Gritolera causa Mebiera amicitia Terca est Chotiar quaesita. Asosegar Quis Pajarito istum Chulón/a docaliche Puñito timet? Gangoso Dat ¡Alijuepupa! enim Campaniárselas intervalla Teguádar et Pegoste relaxat.",
        "Qui Dásela est Maishtro in Socoliar parvis Purrushca malis. Garrapata Cur Dentrar deinde Cundundiar Metrodori Soguilla liberos Vergazo commendas? Choyado Cur Güiscoyol iustitia Chicagüita laudatur? Tostón Sit Dominguiar enim Sobado idem Chirgue caecus, Pastelero debilis. Delaespeshal Efficiens Charraluda dici Gallito potest. Enjutar Respondeat Chonte totidem Palo verbis.",
        "Quid Pollo sequatur, Tustaca quid Calsonillo repugnet, Dendioy vident. Yagual Vide, Tucallo quantum, Chabacán inquam, Piladera fallare, Sobaco Torquate. Gorra Memini Churute vero, Ajolotar inquam; Talhuates Praeteritis, Arcol inquit, Majada gaudeo. Juco Ita ¡Guácala! credo. Pishirico Quid Guayuso iudicant Zumbar sensus? Jerigonza Sed Chichipate quot Chipe homines, Tulunco tot Parchado sententiae;"
      ]
    }
  }
}
</script>
