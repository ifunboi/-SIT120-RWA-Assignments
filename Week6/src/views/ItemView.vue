<template>
  <div class="d-flex flex-column align-items-center">
    <img alt="image" v-bind:src="viewedItem.img" />
    <h2 class="add-margin-md">{{viewedItem.category}}</h2>
    <h3>{{viewedItem.name}}</h3>
    <span class="add-margin-md">{{viewedItem.price}} $</span>
    <span>{{viewedItem.descreption}}</span>
    <button class="add-button add-margin-md" v-on:click="AddToCartFunction">Add to Cart</button>
  </div>
  
</template>

<script>
// @ is an alias to /src

import SiteData from "../SiteData";

export default {
  data: function () {
    return {viewedItem : null};
  },
  name: "ItemView",
  computed: {
    Total: function () {
      return SiteData.CalculateTotal();
    },
    Items: function () {
      return SiteData.GetAllItems();
    },
  },
  methods: {
    getViewedItem() {
      this.viewedItem = this.Items.find(
      (element) => element.name == this.$route.params.itemName
    );
    },
    AddToCartFunction() {
      SiteData.AddToCart(this.viewedItem)
    }
  },
  created() {
    this.getViewedItem()
  }
  
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
  background-color: rgb(0, 33, 43);
  text-align: center;
  padding: 3% 0%;
}
h3 {
  text-align: center;
  color: rgb(0, 2, 24);
}
.routerlinks {
  padding: 30px;
}

.routerlinks a {
  font-weight: bold;
  color: #001427;
}

.routerlinks a.router-link-exact-active {
  color: #0f001f;
}

.add-button {
  background-color: rgb(109, 134, 19);
  border: none;
  color: rgb(160, 135, 25);
  font-weight: bold;
  padding: 10px 15px;
}

.add-button:focus {
  border: none;
  outline: none;
}

.add-button:hover {
  background-color: rgba(199, 164, 7, 0.76);
  color: rgb(18, 31, 1);
}

.add-margin-md {
  margin: 25px 0;
}
</style>