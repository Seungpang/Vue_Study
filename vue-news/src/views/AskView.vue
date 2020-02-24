<template>
    <div>
      <div v-for="item in this.$store.state.ask" :key="item">{{ item }}</div>
    </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }

}
</script>

<style>

</style>