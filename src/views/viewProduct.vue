<template>
<slot>
  <listaProductos @add-to-cart="addToCart"></listaProductos>  
</slot>

</template>

    <script>
    import listaProductos from "../components/ListaProductos.vue"

    
    export default {
      name: 'viewProduct',
      components: {
          listaProductos,
      },
      methods: {
        addToCart(item) {
          this.carrito.push(item);
        },
      }
      }
    
        
  
    </script>




