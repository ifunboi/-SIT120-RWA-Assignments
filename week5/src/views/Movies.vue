<template>
  <div class="home">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col class="menu">
          <h3>GENERE</h3>
          <div class="routerlinks">
            <h6><router-link to="/Movies">FILMS</router-link></h6>
            <h6><router-link to="/TvShows">TvSeries</router-link></h6>
          </div>
        </b-col>

        <b-col class="items" cols="8">
          <h3>FILMS</h3>

          <b-container fluid>
            <b-row>
              <b-col
                v-for="item in Movies"
                :key="item.name"
                sm="12"
                md="6"
                lg="4"
                xl="3"
              >
                <Item v-bind:item="item" />
              </b-col>
            </b-row>
          </b-container>
        </b-col>

        <b-col class="cart">
          <h3>MY SHOPPING CART</h3>
          <div>
            <h5>TOTAL BILL: $ {{ Total }}</h5>
          </div>
          <transition-group name="cartitems" tag="p">
            <CartItem
              v-for="item in CartItems"
              :key="item.name"
              v-bind:item="item"
            />
          </transition-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Item from "../components/Item";
import CartItem from "../components/CartItem";
import SiteData from "../SiteData";

export default {
  data: function () {
    return SiteData.state;
  },
  name: "Fruits",
  components: { Item, CartItem },
  computed: {
    Total: function () {
      return SiteData.CalculateTotal();
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
  background-color: rgb(92, 78, 2);
  text-align: center;
  padding: 3% 0%;
}
h3 {
  text-align: center;
  color: rgb(3, 15, 26);
}
.routerlinks {
  padding: 30px;
}

.routerlinks a {
  font-weight: bold;
  color: #966305;
}
</style>