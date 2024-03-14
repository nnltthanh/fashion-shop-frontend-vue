// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    customer: null,
    // other state properties as needed
  },
  mutations: {
    setCustomer(state, customer) {
      state.customer = customer;
      // Lưu thông tin customer vào local storage
      localStorage.setItem('customer', JSON.stringify(customer));
    },
    // add other mutations as needed
  },
  actions: {
    setCustomer({ commit }, customer) {
      commit('setCustomer', customer);
    },
    // add other actions as needed
  },
  getters: {
    getCustomer: (state) => state.customer,
    // add other getters as needed
  },
});

export default store;
