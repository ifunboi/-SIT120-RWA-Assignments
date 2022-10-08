<template>
  <div>
    <div class="cart-item">
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="5">
              <b-card-img
                v-bind:src="item.img"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="7">
              <b-card-body>
                <b-card-text>
                  <div class="cartitem">
                    <span>{{ item.name }}</span>
                    <span>${{ item.price }}</span>
                    <span>Qty : {{ item.qty }}</span>
                    <b-button
                      size="sm"
                      v-on:click="RemoveItemFuncton"
                      class="removebttn"
                      >Remove</b-button
                    >
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import sitedata from "../SiteData";

export default {
  props: ["item"],
  methods: {
    RemoveItemFuncton: function () {
      sitedata.Remove(this.item);
    },
  },
}
</script>

<style scoped>
.cart-item {
  display: inline-block;
  margin-bottom: 5%;
}

.rounded-0 {
  margin-top: 25%;
}

.cartitem span {
  display: block;
  text-align: center;
}
.removebttn{
  float: center;
}
@media screen and (min-width: 990px) {
    .overflow-hidden{
        min-width: 152px;
    }
}
</style>