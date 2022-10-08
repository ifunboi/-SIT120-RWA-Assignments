<template>
  <div class="item">
    <router-link :to="{ name: 'items', params: { itemName: item.name } }">
      <b-img class="itemimg" v-bind:src="item.img" fluid alt="image"></b-img>
    </router-link>
    <div>
      <router-link :to="{ name: 'items', params: { itemName: item.name } }">
        <h5 class="align">{{ item.name }}</h5>
      </router-link>
      <h5 class="align">${{ item.price }}</h5>
      <div class="flex-row justify-content-center align-items-center">
        <b-form-input
          v-model="item.qty"
          type="number"
          value="1"
          class="item-qty"
          size="sm"
        ></b-form-input>
        <b-button
          class="item-qty-button"
          size="sm"
          v-on:click="AddToCartFunction"
        >
          Add to Cart
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import sitedata from "../SiteData";

export default {
  props: ["item"],
  methods: {
    AddToCartFunction: function () {
      sitedata.AddToCart(this.item);
    },
  },
};
</script>


<style scoped>
.item {
  background-color: rgb(193, 218, 233);
  border: solid rgb(150, 201, 226) 1px;
  padding-bottom: 24px;
  text-align: left;
}

.itemimg {
  height: 175px;
  width: 100%;
  margin-bottom: 5%;
}

.item-qty {
  width: 50%;
  float: left;
  margin-right: 25%;
  margin-left: 25%;
  text-align: center;
}

.item-qty-button {
  margin-top: 10px;
  margin-right: 25%;
  margin-left: 25%;
  text-align: center;
  width: 50%;
}

.align {
  text-align: center;
}
</style>
