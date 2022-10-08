<template>
    <div class="item">
        <div>
          <b-img class="itemimg"  v-bind:src="item.img"  fluid alt="image"></b-img>
            <div class="">
                <h5 class="align">{{ item.name }}</h5>
                <h5 class="align">${{ item.price }}</h5>
                <b-form-input v-model="item.qty" type="number" value="1" class="item-qty" size="sm" ></b-form-input>
                <b-button size="sm" v-on:click="AddToCartFunction" >Add to Cart</b-button>
            </div>
        </div>
    </div>  
</template>

<script>
import sitedata from '../SiteData'

export default {
  props: [ 'item' ],
  methods: {
    AddToCartFunction: function() {
    sitedata.AddToCart(this.item);
   }
 }
}
</script>


<style scoped>
.item{
  background-color: rgb(193, 218, 233);
  border: solid rgb(150, 201, 226) 1px;
  margin-bottom: 7%;
  padding: 4%;
  text-align: left;
}

.itemimg {
  height: 175px;
  width: 100%;
  margin-bottom: 5%;
}

.item-qty{
    width: 29%;
    float: left;
    margin-right: 5%;
    margin-left: 8%;
}
.align{
  text-align: center;
}


</style>
