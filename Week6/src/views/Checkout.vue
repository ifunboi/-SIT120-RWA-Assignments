<template>
  <div class="checkout-container d-flex flex-column align-items-center">
    <h2 class="add-margin-md">CHECK-OUT</h2>
    <div class="checkout-items">
      <CartItem v-for="item in CartItems" :key="item.name" v-bind:item="item" />
    </div>
    <div class="total add-margin-md">
      <span>TOTAL BILL: $ {{ Total }}</span>
    </div>
    <div>
      <router-link to="/">
        <button v-on:click="RemoveAll" class="checkout-button">CART CHECKOUT</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CartItem from "../components/CartItem";
import SiteData from "../SiteData";

export default {
  data: function () {
    return SiteData.state;
  },
  name: "Checkout",
  components: { CartItem },
  computed: {
    Total: function () {
      return SiteData.CalculateTotal();
    },
  },
  methods: {
    RemoveAll: function () {
      SiteData.RemoveAll();
    },
  },
};
</script>


<style scoped>
.cartitems-enter-active,
.cartitems-leave-active {
  transition: all 800ms;
}
.cartitems-enter, .cartitems-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
h5 {
  background-color: rgb(214, 212, 63);
  text-align: center;
  padding: 3% 0%;
}
h3 {
  text-align: center;
  color: rgb(52, 58, 3);
}
.routerlinks {
  padding: 30px;
}

.routerlinks a {
  font-weight: bold;
  color: #2a2e03;
}

.routerlinks a.router-link-exact-active {
  color: #dfbe06;
}

.checkout-items {
  border: 1px solid rgb(19, 32, 4);
  padding: 25px;
  max-height: 500px;
  overflow: auto;
}

.add-margin-md {
  margin: 25px 0;
}

.checkout-button {
  background-color: rgb(214, 128, 16);
  border: none;
  color: rgba(48, 36, 2, 0.548);
  font-weight: bold;
  padding: 10px 15px;
}

.checkout-button:focus {
  border: none;
  outline: none;
}

.checkout-button:hover {
  background-color: rgb(37, 46, 0);
  color: rgb(248, 205, 14);

}
</style>