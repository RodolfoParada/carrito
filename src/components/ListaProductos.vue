<template>
  <div>
    <h1>Lista de Productos</h1>
    <form>
      <div class="row">
        <div
          class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col p-5"
          v-for="item in items"
          :key="item.name"
        >
          <div class="card card-item">
            <img
              :src="item.url"
              class="card-img-top d-flex justify-content-center product-image"
              alt="Imagen del producto"
              id="cake"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">Precio: {{ item.price }}</p>
            </div>
            <div>
              <button
                type="button"
                @click="agregarAlCarrito(item)"
                class="btn btn-success mb-2"
              >
                Agregar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Json from '../Json/postrs.json';

export default {
  name: 'ListaProductos',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.items = Json;
    console.log('items', this.items);
  },
  methods: {
    agregarAlCarrito(item) {
      this.$store.dispatch('addItem', item);
      console.log('selectedItems', this.$store.getters.selectedItems);
    },
  },
};
</script>

<style scoped>
.card-item {
  width: 500px; /* Ajusta el valor del ancho según tus necesidades */
  height: 400px; /* Ajusta el valor de la altura según tus necesidades */
}
.card-img-top {
  max-width: auto;
  max-height: 300px;
}
</style>
