<template>
  <div>
      <div v-for="job in this.$store.state.jobs" v-bind:key="job"> {{ job }}</div>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>