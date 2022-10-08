<template>
  <div id="app">
    <div>
      <!-- Nav Bar -->
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">{{ SiteName }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/">
                <span class="navbarcolor"> Home </span>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <div v-if="isCheckout()" class="checkout-container">
          <router-link to="/checkout">
            <button class="checkout-button">CHECKOUT</button>
          </router-link>
        </div>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>


<script>
import SiteData from "./SiteData";

export default {
  data: function () {
    return SiteData.state;
  },
  methods: {
    isCheckout: function () {
      return !window.location.href.includes("/checkout");
    },
  },
  name: "App",
};
</script>



<style scoped>
.navbarcolor {
  color: rgb(41, 33, 0);
}
.navbar {
  background-color: rgba(216, 144, 11, 0.692) !important;
}


.checkout-button 
{
  border-radius: 700px;
  border: 2px solid rgb(104, 85, 8);
  background: transparent;
  color: rgb(89, 67, 13);
  font-weight: bold;
  padding: 8px 11px;
  transition: ease-in-out 150ms;
}


.checkout-button:focus {
  outline: none;
}

.checkout-button:hover {
  background-color: #5e440b;
  color: rgba(173, 157, 9, 0.747);
  border: 1px solid rgb(8, 0, 15);
}
</style>