<template>
  <div>
      <section id="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block">
                        <h1 class="heading wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">our <span>CONTACT US</span></h1>
                        <h3 class="title wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">Sign Up for <span>Email Alerts</span> </h3>
                        <form ref="form">
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
                                <input required v-model="form.email" type="text" class="form-control" id="exampleInputEmail1" placeholder="Write your full name here...">
                            </div>
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="800ms">
                                <input required v-model="form.address" type="email" class="form-control" placeholder="Write your email address here...">
                            </div>
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1000ms">
                                <textarea required v-model="form.message" class="form-control" rows="3" placeholder="Write your message here..."></textarea>
                            </div>

                            <a class="btn btn-default wow bounceIn" data-wow-duration="500ms" data-wow-delay="1300ms" href="#" v-on:click="onSubmit">send your message</a>
                            
                        </form>
                        </div>
                </div><!-- .col-md-12 close -->
            </div><!-- .row close -->
        </div><!-- .container close -->
    </section><!-- #contact-us close -->
  </div>
</template>

<script>
export default {

    data(){
        return{
            form:{
                email:"",
                address:"",
                message:""
            }
        }
    },
    methods : {
        onSubmit(e){
            e.preventDefault();
            if(this.form.email == "" || this.form.message=="" || this.form.message == ""){
                alert("กรุณากรอกข้อมูลให้ครบ");
                return false;
            }
            this.$store.dispatch("addContact",this.form)
            .then(()=>{
                this.form.email = "";
                this.form.address = "";
                this.form.message = "";
                $('.modal-contact').modal("show");
            })
        }

    }

}
</script>

<style>

</style>