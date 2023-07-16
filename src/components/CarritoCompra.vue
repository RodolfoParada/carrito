<template>
  <div>
    <h1>Carrito de compra</h1>

    <div class="container">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
        <table class="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <div class="row">
                  <div class="col-3">
                    <button
                      @click="decrementQuantity(item)"
                      :disabled="item.quantity === 1"
                      class="btn btn-secondary mt-2 ms-2"
                      id="decrement-btn"
                    >
                      -
                    </button>
                  </div>
                  <div class="col-4">
                    <input
                      v-model="item.quantity"
                      class="form-control"
                      :class="item.quantity > 0 ? 'positive' : 'negative'"
                      id="quantity-input"
                    />
                  </div>
                  <div class="col-3">
                    <button
                      @click="incrementQuantity(item)"
                      class="btn btn-secondary mt-2"
                      id="increment-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td>{{ getTotal(item) }}</td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="removeFromCart(item)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarritoCompra',
  computed: {
    cartItems() {
      const cartItems = [];
      const selectedItems = this.$store.getters.selectedItems;

      // Agrupar los items por nombre y calcular la cantidad total
      selectedItems.forEach(item => {
        const existingItem = cartItems.find(i => i.name === item.name);
        if (existingItem) {
          existingItem.quantity += 1; // Incrementar la cantidad en 1
        } else {
          cartItems.push({...item, quantity: 1}); // Inicializar la cantidad en 1
        }
      });

      return cartItems;
    },
  },
  methods: {
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    incrementQuantity(item) {
      item.quantity++;
    },
    getTotal(item) {
      return item.price * item.quantity;
    },
    removeFromCart(item) {
      this.$store.dispatch('removeItem', item);
    },
  },
};
</script>

<style scoped>
#decrement-btn {
  margin-left: 30px;
}

#quantity-input {
  margin-left: 20px;
  width: 50px;
}
</style>