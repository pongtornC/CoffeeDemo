<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>แก้ไขล่าสุด</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Row</th>
                <th scope="col">ID</th>
                <th scope="col">ตาราง</th>
                <th scope="col">ผู้แก้ไข</th>
                <th scope="col">วันที่</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(x,index) in loadData" :key="x.logdataid">
                <td scope="row">{{index+1}}</td>
                <td>{{x.logdataid}}</td>
                <td>{{x.logdataeditby}}</td>
                <td>{{x.logdataname}}</td>
                <td>{{x.logdatainsert}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
  data() {
    return {};
  },
  async validate({ params, store }) {
    return true;
  },
  async asyncData({ $axios, params, store, route }) {
    var loadData = [];
    loadData = store.getters.getLogData;
    return { loadData };
  }
};
</script>

<style scoped>
.mb-0 {
  margin-bottom: 0px;
}
</style>