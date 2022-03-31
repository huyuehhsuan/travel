import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: '',
        component: Home,
        children: [{
            path: '/',
            name: 'Content',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Content.vue')
        }, {
            path: '/detial',
            name: 'Detial',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Detial.vue')
        }]
    },

]

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0, behavior: 'smooth' };
    },
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router