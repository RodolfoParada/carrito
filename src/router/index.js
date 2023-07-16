import {
  createRouter,
  createWebHistory
} from 'vue-router'



const routes = [



  {
    path: '/create-registro',
    name: 'createRegistro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/createRegistro')
  },
  {
    path: '/create-login',
    name: 'createLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/createLogin')
  },
  {
    path: '/carrito-compra',
    name: 'carritoCompra',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/viewCarrito')
  },
  {
    path: '/view-Product',
    name: 'viewProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/viewProduct')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router