import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import Products from '../components/Products.vue'
import About from '../components/About.vue'
import Error from '../components/Error.vue'
import Action from '../components/genres/Action.vue'
import Adventure from '../components/genres/Adventure.vue'
import Fantasy from '../components/genres/Fantasy.vue'
import Horror from '../components/genres/Horror.vue'
import Genres from '../components/genres/Genres.vue'
// import GenreDetails from '../components/genres/GenreDetails.vue'

const routes = [
    {path: '/Home', component: Home},
    {path: '/Products', component: Products},
    {path: '/About', component: About},
    {path: '/genres', name: 'Genres', component: Genres},
    // {path: '/genres/:id', name: 'GenreDetails', component: GenreDetails, props: true},
    {path: '/Action', name: 'Action', component: Action},
    {path: '/Adventure', name: 'Adventure', component: Adventure},
    {path: '/Fantasy', name: 'Fantasy', component: Fantasy},
    {path: '/Horror', name: 'Horror',component: Horror},
    {path: '/:pathMatch(.*)*', component: Error}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router