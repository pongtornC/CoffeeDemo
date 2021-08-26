<template>
  <div>
    <div id="contact-us">
     
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <h1 class="heading">
                <span>Login</span>
              </h1>
              <h3 class="title">
                Please enter
                <span>Username and Password to access.</span>
              </h3>
              <form @submit="onSubmit">
                <div
                  class="form-group wow fadeInDown"
                  data-wow-duration="500ms"
                  data-wow-delay="600ms"
                >
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Write your full name here..."
                  />
                </div>
                <div
                  class="form-group wow fadeInDown"
                  data-wow-duration="500ms"
                  data-wow-delay="800ms"
                >
                  <input
                    v-model="form.password"
                    type="text"
                    class="form-control"
                    placeholder="Write your email address here..."
                  />
                </div>

                <button
                  class="btn btn-login btn-default wow bounceIn"
                  data-wow-duration="500ms"
                  data-wow-delay="1300ms"
                  type="submit"
                >Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal message="Username หรือ Password ผิด"/>
  </div>
</template>

<script>
import Modal from "@/components/Master/Modal.vue";
export default {

  data(){
        return{
            form:{
                email:"",
                password:""
            }
        }
    },
    methods : {
        async onSubmit(e){
          e.preventDefault();
          await this.$store.dispatch("CheckLogin",this.form)
          var statusLogin = this.$store.getters.getStatusLogin;
          if(statusLogin=="success"){
            localStorage.setItem("userAuthentication", true);
            localStorage.setItem("userName", this.$store.getters.getDataLogin);
            this.$router.push('admin');
          }
          else{
            $('.modal-contact').modal("show");
          }
        }
  }

};
</script>

<style scoped>
.btn-login {
  background: #ff4f02;
  float: right;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0px;
  border: 0px;
  width: 512px;
  height: 50px;
  padding-top: 15px;
  -webkit-transition: 0.3s all;
  -o-transition: 0.3s all;
  transition: 0.3s all;
}
</style>