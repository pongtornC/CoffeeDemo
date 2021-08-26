<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <form @submit="fnsubmit">
            <div class="form-group">
              <label for="InputID">ID</label>
              <input
                v-model="DataContactAdminByUser.contactid"
                readonly
                type="type"
                class="form-control"
                id="InputID"
                placeholder="ID"
              />
            </div>

            <div class="form-group">
              <label for="InputEmail">Email</label>
              <input
                v-model="DataContactAdminByUser.contactemail"
                readonly
                type="email"
                class="form-control"
                id="InputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label for="textareaAddress">Address</label>
              <textarea
                v-model="DataContactAdminByUser.contactaddress"
                readonly
                rows="5"
                class="form-control"
                id="textareaAddress"
                placeholder="Address"
              />
            </div>
            <div class="form-group">
              <label for="InputMessage">Message</label>
              <textarea
                v-model="DataContactAdminByUser.contactmessage"
                readonly
                rows="5"
                class="form-control"
                id="InputMessage"
                placeholder="Message"
              />
            </div>

            <div class="form-group">
              <label for="InputRemark">Remark</label>
              <textarea
                v-model="DataContactAdminByUser.remark"
                rows="5"
                class="form-control"
                id="InputRemark"
                placeholder="Remark"
              />
            </div>

            <div class="form-group">
              <label>Status</label>
              <select v-model="DataContactAdminByUser.statusglobalid" class="form-control">
                <option
                  v-for="d in DataStatusGlobal"
                  :key="d.statusglobalid"
                  :value="d.statusglobalid"
                  :selected="d.statusglobalname === DataContactAdminByUser.statusglobalname"
                >{{d.statusglobalname}}</option>
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
    return {};
  },
  async asyncData({ $axios, params, store }) {
    var DataContactAdminByUser = [];
    var DataStatusGlobal = await store.getters.getStatusGlobal;
    var DataContactAdmin = await store.getters.getDataContactAdmin;
    await store.dispatch("getDataContactByUser", params.id).then(() => {
      DataContactAdminByUser = store.getters.getDataContactAdminByUser[0];
    });
    return { DataContactAdminByUser, DataStatusGlobal, DataContactAdmin };
  },
  methods:{
    fnsubmit(e){
      e.preventDefault();
      this.$store.dispatch("UpdateDataContact",this.DataContactAdminByUser)
            .then(()=>{
                //console.log("DataContactAdminByUser1 =",this.DataContactAdminByUser);
                //console.log("DataContactAdminByUser2 =",JSON.stringify(this.DataContactAdmin));
                //console.debug("DataContactAdminByUser3 =",this.DataContactAdmin);
                //alert("บันทึกเรียบร้อย");
                this.$router.push("/admin/contact");
            })
    }
  }
};
</script>

<style>
</style>