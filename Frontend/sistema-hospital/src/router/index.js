import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '@/components/registerUser.vue'
import LoginView from '@/components/login.vue'
import DashboardView from '@/components/dashboard.vue'
import Personas from '@/components/Personas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    }
    ,
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children:[
        {path:'/personas', name:'personas',component:Personas}
      ]
    }
  ]
})

export default router
