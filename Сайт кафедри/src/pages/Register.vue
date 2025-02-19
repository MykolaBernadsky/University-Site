<template lang="html">
    <div class="ui middle aligned center aligned grid login__container">
      <div class="column">
        <h2 class="ui main_header header">
          <div class="content">
            Реєстрація нового акаунту
          </div>
        </h2>
        <form class="ui large form" :class="{ 'error': hasErrors}">
          <div class="ui stacked segment">

            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="name" placeholder="Введіть ваше ім'я" v-model.trim="name" required>
              </div>
            </div>

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

            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password_confirmation" placeholder="Підтвердіть пароль" v-model.trim="password_confirmation" required>
              </div>
            </div>

            <div class="ui fluid large sucess_btn button" @click.prevent="register" :class="{ 'loading': isLoading }">Register</div>
          </div>

          <div class="ui error message" v-if="hasErrors">
              <p v-for="error in errors"> {{ error }} </p>
          </div>

        </form>

        <div class="ui message">
          Маєте акаунт? <router-link to="/login">Sign In</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import md5 from 'md5'
import { firebaseObj } from '../config/firebaseConfig'

export default {
    name: 'register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: [],
            userRef: firebaseObj.database().ref('users'),
            isLoading: false
        }
    },
    computed: {
        hasErrors() {
            return this.errors.length > 0
        }
    },
    methods: {
        register() {
            this.errors = []

            if (this.isFormValid()) {
                this.isLoading = true
                firebaseObj.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    user.updateProfile({
                        displayName: this.name,
                        photoURL: 'http://www.gravatar.com/avatar/' + md5(user.email) + '?id=identicon'
                    }).then(() => {
                        this.saveUserToUserRef(user).then(() => {
                            this.$store.dispatch('setUser', user)
                            this.$router.push('/')
                        })
                    }, (error) => {
                        this.errors.push(error.message)
                        this.isLoading = false
                    })
                }).catch((error) => {
                    this.errors.push(error.message)
                    this.isLoading = false
                })
            }
        },
        saveUserToUserRef(user) {
            return this.userRef.child(user.uid).set({
                name: user.displayName,
                avatar: user.photoURL
            })
        },
        isEmpty() {
            if (this.name.length === 0 || this.email.length === 0 ||
                this.password.length === 0 || this.password_confirmation.length === 0) {
                return true
            }
            return false
        },
        passwordValid() {
            if (this.password.length < 6 || this.password_confirmation.length < 6) {
                return false
            }
            if (this.password !== this.password_confirmation) {
                return false
            }
            return true
        },
        isFormValid() {
            if (this.isEmpty()) {
                this.errors.push('Empty fields are not allowed')
                return false
            }
            if (!this.passwordValid()) {
                this.errors.push('Password are incorrect')
                return false
            }
            return true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../main.scss';

.login__container {
    margin-top: 40px;
}

.column {
    max-width: 450px;
}

</style>
