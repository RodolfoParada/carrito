<template>
  <div id="app">
    <nav>
      <router-link to="/create-registro">registro</router-link> |
      <router-link to="/create-login">login</router-link> |
      <router-link to="/carrito-compra">carrito compra</router-link> |
      <router-link to="/view-product">lista de Productos</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import CarritoCompra from './components/CarritoCompra.vue';
import ListaProductos from './components/ListaProductos.vue';


export default {
  name: 'viewProduct',
  components: {
    CarritoCompra,
    ListaProductos
  },
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
