<template>
  <div>
    <Header/>
    <RouterView></RouterView>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/common/Header.vue";
  import Footer from "./components/common/Footer.vue";
  export default {
    components: {
      Header,
      Footer
    },
    data () {
      return {

      }
    },
    created() {
      this.$store.dispatch('initAuth');
      this.$store.dispatch('initApp');
    }
  }
</script>

<style>

</style>
