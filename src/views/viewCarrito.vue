<template>
   <carro :carrito="carrito"></carro>  

</template>

<script>
import carro from  '../components/CarritoCompra.vue'
export default {
   name: 'viewCarrito',
   components: {
      carro,
   },
   data() {
      return {
         carrito: [],
      };
   },
}

</script>
