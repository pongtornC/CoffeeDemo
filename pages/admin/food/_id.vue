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
                v-model="DataBannerByID.foodid"
                readonly
                type="type"
                class="form-control"
                id="InputID"
                placeholder="ID"
              />
            </div>

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
                  :selected="TB.bannername === DataBannerByID.bannername"
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
                  :selected="TC.catname === DataBannerByID.catname"
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
      DataBannerByID: {},
      DataTypeBanner: {},
      DataTypeCategoryfood: {}
    };
  },
  async asyncData({ $axios, params, store, route }) {
    var DataBannerByID = [];
    var DataTypeBanner = [];
    var DataTypeCategoryfood = [];

    var datainformation = '{"datatype":"'+ route.query.type + '","dataid":"' + params.id + '"}';
    var myObj = JSON.parse(datainformation);

    /**/ await store.dispatch("getBNByID", myObj).then(() => {
      DataBannerByID = store.getters.getBannerAdminByID[0];
    });
    await store.dispatch("getDataTypeBanner", params.id).then(() => {
      DataTypeBanner = store.getters.getTypeBanner[0];
    });
    await store.dispatch("getDataTypeCategoryfood", params.id).then(() => {
      DataTypeCategoryfood = store.getters.getTypeCategoryfood[0];
    });

    return { DataBannerByID, DataTypeBanner, DataTypeCategoryfood };
  },
  methods: {
    fnsubmit(e) {
      e.preventDefault();
      this.$store.dispatch("UpdateBNFoodByID", this.DataBannerByID).then(() => {
        this.$router.push("/admin/food");
      });
    }
  }
};
</script>

<style>
</style>