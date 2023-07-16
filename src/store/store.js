import { createStore } from "vuex";

export default createStore({
  state: {
    selectedItems: [],
  },
  mutations: {
    addToSelectedItems(state, item) {
      state.selectedItems.push(item);
    },
    removeFromSelectedItems(state, index) {
      state.selectedItems.splice(index, 1);
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addToSelectedItems", item);
    },
    removeItem({ commit, state }, item) {
      const index = state.selectedItems.indexOf(item);
      if (index !== -1) {
        commit("removeFromSelectedItems", index);
      }
    },
  },
  getters: {
    selectedItems: (state) => state.selectedItems,
  },
});
