<template>
  <div>
    <div class="container">
      <h1 class="mb-4">ข้อมูล Banner</h1>
      <br />
      <div id="bannersilder">
        
        <div class="row">
          <div class="col-lg-6">
            <h2>Silder Banner</h2>
          </div>
           <div class="col-lg-6 text-right">
             <button @click="addBanner" class="btn btn-primary">เพิ่ม Banner</button>
           </div>
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th style="width: 5%" scope="col">Row</th>
              <th style="width: 5" scope="col">ID</th>
              <th style="width: 10%" scope="col">ชื่อ</th>
              <th style="width: 25%" scope="col">รายละเอียด</th>
              <th style="width: 5%" scope="col">รูปภาพ</th>
              <th style="width: 10%" scope="col">ราคา</th>
              <th style="width: 10%" scope="col">ประเภท Banner</th>
              <th style="width: 10%" scope="col">ประเภท อาหาร</th>
              <th style="width: 10%" scope="col">สร้างโดย</th>
              <th style="width: 10%" scope="col">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(x,index) in loadData" :key="x.foodid">
              <td>{{index+1}}</td>
              <td>{{x.foodid}}</td>
              <td>{{x.foodname}}</td>
              <td>{{x.fooddescription}}</td>
              <td><img width="50" :src="checkImage(x.foodimage)" alt=""></td>
              <td>{{x.foodprice}}</td>
              <td>{{x.bannername}}</td>
              <td>{{x.catname}}</td>
              <td>{{x.username}}</td>
              <td><a :href="'/admin/banner/'+x.foodid+'?type='+x.bannername" class="btn btn-primary">แก้ไข</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div id="bannerblog">
        <h2>Blog Banner</h2>
        <table class="table">
          <thead>
            <tr>
              <th style="width: 5%" scope="col">Row</th>
              <th style="width: 5" scope="col">ID</th>
              <th style="width: 10%" scope="col">ชื่อ</th>
              <th style="width: 25%" scope="col">รายละเอียด</th>
              <th style="width: 5%" scope="col">รูปภาพ</th>
              <th style="width: 10%" scope="col">ราคา</th>
              <th style="width: 10%" scope="col">ประเภท Banner</th>
              <th style="width: 10%" scope="col">ประเภท อาหาร</th>
              <th style="width: 10%" scope="col">สร้างโดย</th>
              <th style="width: 10%" scope="col">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(x,index) in loadData2" :key="x.foodid">
              <td>{{index+1}}</td>
              <td>{{x.foodid}}</td>
              <td>{{x.foodname}}</td>
              <td>{{x.fooddescription}}</td>
              <td><img width="50" :src="checkImage(x.foodimage)" alt=""></td>
              <td>{{x.foodprice}}</td>
              <td>{{x.bannername}}</td>
              <td>{{x.catname}}</td>
              <td>{{x.username}}</td>
              <td><a :href="'/admin/banner/'+x.foodid+'?type='+x.bannername" class="btn btn-primary">แก้ไข</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div id="bannerfooter">
        <h2>Footer Banner</h2>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
  data() {},
  async asyncData({ $axios, params, store }) {
    const loadData = store.getters.getAllSliderHome;
    const loadData2 = store.getters.getAllBlogHome;
    return { loadData, loadData2 };
  },
  methods: {
    addBanner(){
       this.$router.push("/admin/banner/add");
    },
    checkImage(v){
      var pathimage=v;
      if(pathimage=="" || pathimage==null){
        pathimage="/_nuxt/assets/images/unnamed.jpg";
      }
      else{
        pathimage=v;
      }
      return pathimage;
      
    }
  }
};
</script>

<style>
</style>