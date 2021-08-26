<template>
  <div class="pricing-list">
    <div class="title">
      <h3>
        Featured
        <span>on the week</span>
      </h3>
    </div>
    <ul>
     <li v-for="x in loadData" :key="x.foodname" class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
        <div class="item">
          <div class="item-title">
            <h2>{{x.foodname}}</h2>
            <div class="border-bottom"></div>
            <span>$ {{x.foodprice}}.00</span>
          </div>
          <p>{{x.fooddescription}}</p>
        </div>
      </li>
    </ul>
    <nuxt-link to="/price"></nuxt-link>
    <a
      class="btn btn-default pull-right wow bounceIn"
      data-wow-duration="500ms"
      data-wow-delay="1200ms"
      href="#"
      role="button"
    >More Info</a>
  </div>
</template>

<script>
export default {
    computed:{
        loadData(){
            return this.$store.getters.getAllMenuHome
        }
    }
};
</script>

<style>
</style>