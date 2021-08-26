<template>
  <div>
    <div class="container">
      <h1 class="mb-4">
         ข้อมูลรายการอาหาร
      </h1>

      <div>
        <h2>Silder Banner</h2>
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
              <td><a :href="'/admin/food/'+x.foodid+'?type='+x.bannername" class="btn btn-primary">แก้ไข</a></td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
  </div>
</template>

<script>
export default {
  layout:"AdminLayout",
  async asyncData({ $axios, params, store }) {

    const loadData = store.getters.getAllMenuHome;
    return { loadData };
  },
  methods: {
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
}
</script>

<style>

</style>