<template lang="html">
    <div class="ui middle aligned center aligned grid login__container">
      <div class="column">
        <h2 class="ui main_header header">
          <div class="content">
            Login
          </div>
        </h2>
        <form class="ui large form" :class="{ 'error': hasErrors}">
          <div class="ui stacked segment">

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="email" name="email" placeholder="Введіть ваш e-mail" v-model.trim="email" required>
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Пароль" v-model.trim="password" required>
              </div>
            </div>

            <div class="ui fluid large sucess_btn button" @click.prevent="login" :class="{ 'loading': isLoading }">Sign in -></div>
          </div>

          <div class="ui error message" v-if="hasErrors">
              <p v-for="error in errors"> {{ error }} </p>
          </div>

        </form>

        <div class="ui message">
          Немаєте акаунту? <router-link to="/register">Зареєструватися</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { firebaseObj } from '../config/firebaseConfig'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            isLoading: false
        }
    },
    computed: {
        hasErrors() {
            return this.errors.length > 0
        }
    },
    methods: {
        login() {
            this.errors = []
            if (this.isFormValid()) {
                this.isLoading = true
                firebaseObj.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    this.$store.dispatch('setUser', user)
                    this.$router.push('/chat')
                }).catch((error) => {
                    this.errors.push(error.message)
                    this.isLoading = false
                })
            }
        },
        isFormValid() {
            if (this.email.length > 0 && this.password.length > 0) {
                return true
            }
            return false
        }
    }
}
</script>

<style scoped lang="scss">
@import '../main.scss';

.login__container {
 margin-top: 40px;
}

.column {
    max-width: 450px;
}

</style>
