<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>ข้อมูลผู้ติดต่อ</h1>
        </div>
        <div class="col-lg-6 text-right">
          <button @click="addUser" class="btn btn-primary">เพิ่ม ผู้ใช้งาน</button>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Row</th>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">UserEmail</th>

            <th scope="col">Status</th>
            <th scope="col">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(x,index) in loadData" :key="x.contactid">
            <td scope="row">{{index+1}}</td>
            <td>{{x.userid}}</td>
            <td>{{x.username}}</td>
            <td>{{x.useremail}}</td>
            <td>
              <button class="btn" :class="genclass(x.statusid)">{{gebtextbtn(x.statusid)}}</button>
            </td>
            <td>
              <a :href="'/admin/user/'+x.userid" class="btn btn-primary">จัดการ</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
  data() {
    return {};
  },
  methods: {
    addUser() {
      this.$router.push("/admin/user/create");
    },
    genclass(x) {
      if (x == "New") {
        return "btn-info";
      } else if (x == "Done") {
        return "btn-primary";
      } else if (x == "Pending") {
        return "btn-warning";
      } else if (x == "Appove") {
        return "btn-success";
      } else {
        return "btn-dark";
      }
    },
    gebtextbtn(x) {
      if (x == 1) {
        return "ใช้งาน";
      } else {
        return "ไม่ได้ใช้งาน";
      }
    }
  },
  async asyncData({ $axios, params, store }) {
    var loadData = [];
    loadData = store.getters.getLoadDataUser;
    return { loadData };
  }
};
</script>

<style>
</style>