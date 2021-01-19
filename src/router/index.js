import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import counter from '../views/counter.vue'
import todo from '../views/todo.vue'
import todoCounter from '../views/todoCounter.vue'

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
  },
  {
    path: '/todoCounter',
    name: 'todoCounter',
    component: todoCounter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
