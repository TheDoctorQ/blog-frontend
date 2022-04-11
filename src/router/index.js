import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test from '../views/Test.vue'
import Product from '../views/Product.vue'
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue"
import Posts from "../views/PostsIndex.vue"
import PostsNew from "../views/PostsNew.vue"
import PostsShow from "../views/PostsShow.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/product",
    component: Product
  },
  {
    path: "/signup", 
    name: "signup", 
    component: Signup
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: Logout 
  },
  { 
    path: "/posts", 
    name: "posts", 
    component: Posts 
  },
  { 
    path: "/posts/new", 
    name: "newposts", 
    component: PostsNew
  }, 
  { 
    path: "/posts/:id", 
    name: "newposts", 
    component: PostsShow
  }, 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
