<template>
  <div>
    <!--<h1> test = {{DataUserByID}} </h1>-->
    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <form @submit="fnsubmit">

            <div class="form-group">
              <label for="InputName">ชื่อ</label>
              <input
                v-model="DataUserByID.username"
                type="text"
                class="form-control"
                id="InputName"
                placeholder="Enter Name"
              />
            </div>

            <div class="form-group">
              <label for="InputEmail">Email</label>
              <input
                v-model="DataUserByID.useremail"
                type="text"
                class="form-control"
                id="InputEmail"
                placeholder="Enter Name"
              />
            </div>

            <div class="form-group">
              <label for="InputPass">รหัสผ่าน</label>
              <input
                v-model="DataUserByID.password"
                type="password"
                class="form-control"
                id="InputPass"
                placeholder="Enter Password"
              />
            </div>

            <div class="form-group">
              <label>Status</label>
              <select class="form-control" v-model="DataUserByID.statusid">
                <option value="1">ใช้งาน</option>>
                <option value="0">ไม่ได้ใช้งาน</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">บันทึก</button>
          </form>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminLayout",
  data() {
    return {
      DataUserByID: {
          username:"",
          useremail:"",
          password:"",
          statusid:1
      }
    };
  },
  methods: {
    fnsubmit(e) {
      e.preventDefault();
       this.$store.dispatch("addUser", this.DataUserByID).then(() => {
        this.$router.push("/admin/user");
      });
    }
  }
};
</script>

<style>
</style>