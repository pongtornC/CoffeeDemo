import Vuex from "vuex";
import axios from "axios";

const createStroe = () => {
  return new Vuex.Store({
    state: {
      //ข้อมูล
      loadDataSliderHome: [],
      loadDataMenuHome: [],
      loadDataBlogHome: [],
      userDataLogin: "",
      StatusLogin: "",
      loadContactAdmin: [],
      ContactAdminByUser: [],
      BannerAdminByID: [],
      StatusGlobal: [],
      TypeBanner: [],
      TypeCategoryfood: [],
      loadDataUser: [],
      loadDataUserByID: [],
      logData: []
    },
    mutations: {
      //จัดการข้อมูลใน state
      setDataSliderState(state, posts) {
        state.loadDataSliderHome = posts;
      },
      setDataMenuState(state, posts) {
        state.loadDataMenuHome = posts;
      },
      setDataBlogState(state, posts) {
        state.loadDataBlogHome = posts;
      },
      setDataUserLogin(state, posts) {
        state.userDataLogin = posts;
      },
      setStatusLogin(state, posts) {
        state.StatusLogin = posts;
      },
      setContactAdminByUser(state, posts) {
        state.ContactAdminByUser = posts;
      },
      setDataContactAdmin(state, posts) {
        state.loadContactAdmin = posts;
      },
      setStatusGlobal(state, posts) {
        state.StatusGlobal = posts;
      },
      setBannerAdminByID(state, posts) {
        state.BannerAdminByID = posts;
      },
      setTypeBanner(state, posts) {
        state.TypeBanner = posts;
      },
      setTypeCategoryfood(state, posts) {
        state.TypeCategoryfood = posts;
      },
      setLoadDataUser(state, posts) {
        state.loadDataUser = posts;
      },
      setLoadDataUserByID(state, posts) {
        state.loadDataUserByID = posts;
      },
      setLogData(state, posts) {
        state.logData = posts;
      }
    },
    actions: {
      //ทำงานร่วมกับ Back end เรียกใช้งานผ่าน component
      async nuxtServerInit(vuexContext, context) {
        const dataSlider = [];

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataBanner" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataSlider.push(response.data.records);
            vuexContext.commit("setDataSliderState", dataSlider[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        const dataMenuHome = [];

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataMenu" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataMenuHome.push(response.data.records);
            vuexContext.commit("setDataMenuState", dataMenuHome[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        const dataBlogHome = [];
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataBlog" },
          headers: { Authorization: "PTKEYCOFFEE" + gettoken() }
        })
          .then(function(response) {
            dataBlogHome.push(response.data.records);
            vuexContext.commit("setDataBlogState", dataBlogHome[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        const dataContactAdmin = [];

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataContactAdmin" },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataContactAdmin.push(response.data.records);
            vuexContext.commit("setDataContactAdmin", dataContactAdmin[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        const dataStatusGlobal = [];

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataStatusglobal" },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataStatusGlobal.push(response.data.records);

            vuexContext.commit("setStatusGlobal", dataStatusGlobal[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "loadUser" },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            const dataUser = [];
            dataUser.push(response.data.records);
            vuexContext.commit("setLoadDataUser", dataUser[0]);
            // console.log("test1 =", dataUser[0]);
          })
          .catch(function(error) {
            console.log(error);
          });

          await axios({
            method: "post",
            url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
            data: { topic: "logData" },
            headers: {
              Authorization: "PTKEYCOFFEE" + gettoken()
            }
          })
            .then(function(response) {

             // console.log("oooo",response.data.records);
              const dataLog = [];
              dataLog.push(response.data.records);
              vuexContext.commit("setLogData", dataLog[0]);
            })
            .catch(function(error) {
              console.log(error);
            });

      },

      // ทำงานเมื่อกด



      async addUser(vuexContext, post) {

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "addUser", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {

            const dataUser = [];
            dataUser.push(response.data.records);
            console.log("res =",response.data.records);
            vuexContext.commit("setLoadDataUser", dataUser[0]);

          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async loadUserByID(vuexContext, post) {

        //console.log(1);
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "loadUser", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {

            
            const dataUser = [];
            dataUser.push(response.data.records);
            vuexContext.commit("setLoadDataUserByID", dataUser[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async UpdateUserByID(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "UpdataUserByID", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            const dataUser = [];
            dataUser.push(response.data.records);
            vuexContext.commit("setLoadDataUser", dataUser[0]);

          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async addbanner(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "AddBanner", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var bannerID = response.data[1].bannerid;

            if (bannerID == "0001") {
            } else if (bannerID == "0002") {
              const dataSlider = [];
              dataSlider.push(response.data[0].records);
              vuexContext.commit("setDataSliderState", dataSlider[0]);
            } else if (bannerID == "0003") {
              const dataBlogHome = [];
              dataBlogHome.push(response.data[0].records);
              vuexContext.commit("setDataBlogState", dataBlogHome[0]);
            } else if (bannerID == "0004") {
            } else if (bannerID == "0005") {
            } else if (bannerID == "0006") {
            } else if (bannerID == "0007") {
            } else if (bannerID == "0008") {
            } else {
            }

           // console.log("data =", response.data);
           // console.log("records =", response.data[0].records);
           // console.log("bannerID =", response.data[1].bannerid);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async addContact(vuexContext, post) {
        //เพิ่ม
        const createPost = { ...post };

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "addContact", information: createPost },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {})
          .catch(function(error) {
            console.log(error);
          });
      },

      async CheckLogin(vuexContext, post) {
        const DataLogin = { ...post };

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "CheckLogin", information: DataLogin },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var StrData = JSON.stringify(response.data);

            var JsonData = JSON.parse(StrData);
            localStorage.setItem("userID", JsonData.userid);

            if (JsonData.status == "success") {
              vuexContext.commit("setDataUserLogin", JsonData.username);
            }

            vuexContext.commit("setStatusLogin", JsonData.status);
          })
          .catch(function(error) {
            vuexContext.commit("setStatusLogin", false);
            console.log(error);
          });
      },

      async getDataContactByUser(vuexContext, post) {
        const dataContactAdminByUser = [];

        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataContactAdminByUser", ContactID: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var StrData = JSON.stringify(response.data);
            var JsonData = JSON.parse(StrData);
            if (JsonData.status == "fail") {
              vuexContext.commit("setContactAdminByUser", JsonData.status);
            } else {
              dataContactAdminByUser.push(response.data.records);
              vuexContext.commit(
                "setContactAdminByUser",
                dataContactAdminByUser[0]
              );
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async UpdateDataContact(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "UpdataDataContactByAdmin", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadContactAdmin;
            var objIndex = myArray.findIndex(
              obj => obj.contactid == response.data[1].contactid
            );

            myArray[objIndex].remark =
              response.data[0].records[objIndex].remark;
            myArray[objIndex].statusglobalname =
              response.data[0].records[objIndex].statusglobalname;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async UpdateBNFoodByID(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "UpdataBannerByID", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadDataMenuHome;

            var objIndex = myArray.findIndex(
              obj => obj.foodid == response.data[0].records[0].foodid
            );

            myArray[objIndex].foodname = response.data[0].records[0].foodname;

            myArray[objIndex].fooddescription =
              response.data[0].records[0].fooddescription;

            myArray[objIndex].foodimage = response.data[0].records[0].foodimage;

            myArray[objIndex].foodprice = response.data[0].records[0].foodprice;

            myArray[objIndex].bannername =
              response.data[0].records[0].bannername;

            myArray[objIndex].catname = response.data[0].records[0].catname;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async UpdateBNByID(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "UpdataBannerByID", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadDataSliderHome;

            var objIndex = myArray.findIndex(
              obj => obj.foodid == response.data[0].records[0].foodid
            );

            myArray[objIndex].foodname = response.data[0].records[0].foodname;

            myArray[objIndex].fooddescription =
              response.data[0].records[0].fooddescription;

            myArray[objIndex].foodimage = response.data[0].records[0].foodimage;

            myArray[objIndex].foodprice = response.data[0].records[0].foodprice;

            myArray[objIndex].bannername =
              response.data[0].records[0].bannername;

            myArray[objIndex].catname = response.data[0].records[0].catname;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async UpdateBNBlogByID(vuexContext, post) {
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "UpdataBannerByID", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            var myArray = vuexContext.state.loadDataBlogHome;

            var objIndex = myArray.findIndex(
              obj => obj.foodid == response.data[0].records[0].foodid
            );

            myArray[objIndex].foodname = response.data[0].records[0].foodname;

            myArray[objIndex].fooddescription =
              response.data[0].records[0].fooddescription;

            myArray[objIndex].foodimage = response.data[0].records[0].foodimage;

            myArray[objIndex].foodprice = response.data[0].records[0].foodprice;

            myArray[objIndex].bannername =
              response.data[0].records[0].bannername;

            myArray[objIndex].catname = response.data[0].records[0].catname;
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getBNByID(vuexContext, post) {
        const dataBannerAdminByID = [];
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataBanner", information: post },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataBannerAdminByID.push(response.data.records);
            vuexContext.commit("setBannerAdminByID", dataBannerAdminByID[0]);
          })
          .catch(function(error) {
            console.log(error);
          });
      },

      async getDataTypeBanner(vuexContext, post) {
        const dataTypeBanner = [];
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataTypeBanner" },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataTypeBanner.push(response.data.records);
            vuexContext.commit("setTypeBanner", dataTypeBanner);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      async getDataTypeCategoryfood(vuexContext, post) {
        const dataTypeCategoryfood = [];
        await axios({
          method: "post",
          url: "http://localhost/api/CoffeeShopAPI/backend/backend.php",
          data: { topic: "getDataTypeCatFood" },
          headers: {
            Authorization: "PTKEYCOFFEE" + gettoken()
          }
        })
          .then(function(response) {
            dataTypeCategoryfood.push(response.data.records);
            vuexContext.commit("setTypeCategoryfood", dataTypeCategoryfood);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    getters: {
      // นำ state ไปใช้งาน
      getAllSliderHome(state) {
        return state.loadDataSliderHome;
      },
      getAllMenuHome(state) {
        return state.loadDataMenuHome;
      },
      getAllBlogHome(state) {
        return state.loadDataBlogHome;
      },
      getDataLogin(state) {
        return state.userDataLogin;
      },
      getStatusLogin(state) {
        return state.StatusLogin;
      },
      getDataContactAdmin(state) {
        return state.loadContactAdmin;
      },
      getDataContactAdminByUser(state) {
        return state.ContactAdminByUser;
      },
      getStatusGlobal(state) {
        return state.StatusGlobal;
      },
      getBannerAdminByID(state) {
        return state.BannerAdminByID;
      },
      getTypeBanner(state) {
        return state.TypeBanner;
      },
      getTypeCategoryfood(state) {
        return state.TypeCategoryfood;
      },
      getLoadDataUser(state) {
        return state.loadDataUser;
      },
      getLoadDataUserByID(state) {
        return state.loadDataUserByID;
      },
      getLogData(state) {
        return state.logData;
      }
      
    }
  });
};

function gettoken() {
  return "CF301930";
}

export default createStroe;
