import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import counter from '../views/counter.vue'
import todo from '../views/todo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/counter',
    name: 'counter',
    component: counter
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
