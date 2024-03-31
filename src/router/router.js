import { createRouter,createWebHistory } from "vue-router";
import landing from "../components/landing.vue";
import about from "../components/about.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'blog',
            component: landing
        },
        {
            path:'/about',
            name:'about',
            component: about
        }
    ]

}
)
export default router