<template>
  <div>
    <ul>
      <li v-for="(x, index) in loadData" :key="x.name" class="wow" :class="index==2 || index==3?'fadeInLeft':'fadeInLeft'" data-wow-duration="300ms" data-wow-delay="300ms">
        
        
        <div v-if="index==2 || index==3">
          
          <div :class="index==2 || index==3?'content-left':'content-right'">
           <h3>{{x.foodname}}</h3>
            <p>{{x.fooddescription}}...</p>
        </div>
        <div class="blog-img">
            <img :src="x.foodimage" :alt="x.foodname" />
          </div>
      </div>

      <div v-else>
          <div class="blog-img">
            <img :src="x.foodimage" :alt="x.foodname" />
          </div>
          <div :class="index==2 || index==3?'content-left':'content-right'">
            <h3>{{x.foodname}}</h3>
            <p>{{x.fooddescription}}...</p>
        </div>
        
      </div>

     
      
      </li>
    </ul>
  </div>
</template>

<script>
export default {

    computed:{
        loadData(){
            return this.$store.getters.getAllBlogHome
        }
    }

};
</script>

<style>
</style>