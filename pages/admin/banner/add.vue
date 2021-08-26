<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <form @submit="fnsubmit">

            <div class="form-group">
              <label for="InputName">ชื่อ</label>
              <input
                v-model="DataBannerByID.foodname"
                type="text"
                class="form-control"
                id="InputName"
                placeholder="Enter Name"
              />
            </div>

            <div class="form-group">
              <label for="textareaDescription">รายละเอียด</label>
              <textarea
                v-model="DataBannerByID.fooddescription"
                rows="5"
                class="form-control"
                id="textareaDescription"
                placeholder="Description"
              />
            </div>
            <div class="form-group">
              <label for="InputImage">รูปภาพ</label>
              <input
                v-model="DataBannerByID.foodimage"
                type="text"
                class="form-control"
                id="InputImage"
                placeholder="Enter Image"
              />
            </div>

            <div class="form-group">
              <label for="InputPrice">ราคา</label>
              <input
                v-model="DataBannerByID.foodprice"
                class="form-control"
                id="InputPrice"
                placeholder="Price"
              />
            </div>

            <div class="form-group">
              <label>ประเภท Banner</label>
              <select class="form-control" v-model="DataBannerByID.bannerid">
                <option
                  v-for="TB in DataTypeBanner"
                  :key="TB.bannerid"
                  :value="TB.bannerid"
                  :selected="TB.bannerid === '0001'"
                >{{TB.bannername}}</option>
              </select>
            </div>

            <div class="form-group">
              <label>ประเภท อาหาร</label>
              <select class="form-control" v-model="DataBannerByID.catid">
                <option
                  v-for="TC in DataTypeCategoryfood"
                  :key="TC.catid"
                  :value="TC.catid"
                  :selected="TC.catid === '0001'"
                >{{TC.catname}}</option>
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
      DataBannerByID: {
        foodname: "",
        fooddescription: "",
        foodimage: "",
        foodprice: "",
        bannerid: "0001",
        catid: "0001",
        userID:""
      },
      DataTypeBanner: {},
      DataTypeCategoryfood: {}
    };
  },
  mounted() {
  this.DataBannerByID.userID = this.getUserID();
},
  async asyncData({ $axios, params, store, route }) {

    var DataTypeBanner = [];
    var DataTypeCategoryfood = [];

    await store.dispatch("getDataTypeBanner", params.id).then(() => {
      DataTypeBanner = store.getters.getTypeBanner[0];
    });
    await store.dispatch("getDataTypeCategoryfood", params.id).then(() => {
      DataTypeCategoryfood = store.getters.getTypeCategoryfood[0];
    });

    return { DataTypeBanner, DataTypeCategoryfood };
  },
  methods: {
      getUserID(){
          var UserID = window.localStorage.userID;
          return UserID;
    },
    fnsubmit(e) {
      e.preventDefault();
       this.$store.dispatch("addbanner", this.DataBannerByID).then(() => {
        this.$router.push("/admin/banner");
      });
      /* */
    }
  }
};
</script>

<style>
</style>