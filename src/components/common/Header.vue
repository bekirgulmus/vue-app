<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">

    <router-link to="/" class="navbar-brand">
      <a class="navbar-brand">Ürün Listesi</a>
    </router-link>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/urun-islemleri" tag="li" class="nav-item">
          <a class="nav-link" :class="logoutClass">Ürün İşlemleri</a>
        </router-link>

        <router-link to="/urun-cikisi" tag="li" class="nav-item">
          <a class="nav-link" :class="logoutClass">Ürün Çıkışı</a>
        </router-link>

      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    },
    computed: {
      logoutClass() {
        return {
          'd-none' : !this.$store.getters.isAuthanticated
        }
      }
    }
  }
</script>
