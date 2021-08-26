<template>
  <div>
    <div id="owl-example" class="owl-carousel">
      <div v-for="x in loadData" :key="x.foodname">
        <!--<a href="#" :title="x.foodname" >
          
        </a>-->
        <img class="img-responsive" :src="x.foodimage" :alt="x.foodname" :title="x.foodname" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  props: {
    loadData: {
      type: Array,
      required: true
    },
    
  }
};
</script>

<style>
</style>