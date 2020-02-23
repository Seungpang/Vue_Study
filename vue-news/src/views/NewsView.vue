<template>
  <div>
      <div v-for="user in this.$store.state.news" v-bind:key="user.title"> {{ user.title }} </div>
  </div>
</template>

<script>


export default {
  // 1
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // fetchNewsList()
    // .then(function(response) {
    //   console.log(response);
    //   // 2
    //   this.users = response.data
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  },
}
</script>

<style>

</style>