<template lang='pug'>
img.card(
  :class="{chosen: c.isSecret}"
  :src="require(`../assets/cards/`+c.pic)"
  @click='choose(c.id)'
  )
</template>

<script>
export default {
  data:()=>({
  
  }),
  props:{
    c:Object
  },
  methods:{
    choose(id){
      this.$emit('choose', id)
    }
  }
}
</script>

<style>

</style>