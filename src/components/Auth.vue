<template>
  <div class="container">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border" :class="{'border-primary': isUser, 'border-success' : !isUser}">
        <h3 class="text-center mb-3 mt-3" :class="{'text-primary': isUser, 'text-success': !isUser}">Vue.js | Auth</h3>
        <hr>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input v-model="user.email" type="email" class="form-control" placeholder="E-posta adresinizi giriniz">
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button type="submit" class="btn btn-block mb-2" :class="{'btn-primary' :isUser, 'btn-success': !isUser}">
              {{ isUser ? 'Giriş Yap' : 'Kayıt Ol' }}
            </button>
            <a href="#" @click.prevent="isUser = !isUser" class="text-secondary">
              {{ isUser ? 'Üye Değilim': 'Üyeliğim var' }}
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        user: {
          email: null,
          password: null,
        },
        isUser: false
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('login', {...this.user, isUser : this.isUser})
          .then(() => {
            this.$router.push('/');
          })
      }
    }
  }
</script>
