import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Tchat from '../pages/Tchat'
import Home from '../pages/Home'
import { firebaseObj } from '../config/firebaseConfig'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/register',
            name: 'Register',
            component: Register
        }, {
            path: '/chat',
            name: 'Chat',
            component: Tchat,
            beforeEnter: (to, from, next) => {
                if (!firebaseObj.auth().currentUser) {
                    next('/login')
                } else {
                    next()
                }
            }
        }
    ]
})
