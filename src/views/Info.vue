<template lang='pug'>
.wrapper
  .header(v-if='STAGE==1')
    cardList(
      v-for='c in CARDS'
      :c='c'
      @choose='chooseC'
    )
    button.start(
      @click='startGame'
      :disabled='secretCard==null'
    ) START
  .body(v-if='STAGE==2')
    p PAPAPP
    button.start(
      @click='reset()'
    ) RESET

</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import cardList from '../views/cardList.vue'
export default {
  data:()=>({
    secretCard:null
  }),
  components:{cardList},
  computed:{
    ...mapGetters(['CARDS','STAGE'])
  },
  methods:{
    ...mapActions,
    ...mapMutations,
    chooseC(id){
      console.log(id)
      this.$store.commit('CHOOSE_SECRET',id)
    },
    async reset(){
      await this.$store.commit('RESET')
    },
    async startGame(){
      await this.$store.dispatch('START_GAME',this.secretCard)
      await this.$store.commit('NEXT_STAGE')
    }
  }
}
</script>

<style lang='stylus'>
.header
  display flex
  .chosen
    box-shadow 10px 5px 5px blue
  .card
    height 90px
    background-size cover
    background-repeat no-repeat
    background-position center center
    margin 10px 10px
    border 4px solid
    border-radius 5px
    :hover
      box-shadow 10px 5px 5px green
      transform translate(6px,7px)
      transition .2s
</style>