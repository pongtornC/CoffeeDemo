<template>
  <div>
    <!--
    Slider start
    ==============================-->
    <section id="slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
              <div class="title">
                <h3>
                  Featured
                  <span>Works</span>
                </h3>
              </div>

              <SliderFood :loadData="loadData" />
            </div>
          </div>
          <!-- .col-md-12 close -->
        </div>
        <!-- .row close -->
      </div>
      <!-- .container close -->
    </section>
    <!-- slider close -->
    <!--
    about-us start
    ==============================-->
    <section id="about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <img
                class="wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="400ms"
                src="@/assets/images/cooker-img.png"
                alt="cooker-img"
              />
              <h1 class="heading wow fadeInUp" data-wow-duration="400ms" data-wow-delay="500ms">
                Your
                <span>Restaurant’s</span>
                <br />Website Has To Look
                <span>Good</span>
              </h1>
              <p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="600ms">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                <br />ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                <br />voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              </p>
            </div>
          </div>
          <!-- .col-md-12 close -->
        </div>
        <!-- .row close -->
      </div>
      <!-- .containe close -->
    </section>
    <!-- #call-to-action close -->
    <!--
    blog start
    ============================-->
    <section id="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <h1 class="heading">
                Latest
                <span>From</span> the
                <span>Blog</span>
              </h1>
              <Blog />
              <a
                class="btn btn-default btn-more-info wow bounceIn"
                data-wow-duration="500ms"
                data-wow-delay="1200ms"
                href="#"
                role="button"
              >More Info</a>
            </div>
          </div>
          <!-- .col-md-12 close -->
        </div>
        <!-- .row close -->
      </div>
      <!-- .containe close -->
    </section>
    <!-- #blog close -->
    <!--
    price start
    ============================-->
    <section id="price">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <h1 class="heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                our
                <span>MENU</span> the
                <span>PRICE</span>
              </h1>
              <p
                class="wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="400ms"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>

              <PriceList />
            </div>
          </div>
          <!-- .col-md-12 close -->
        </div>
        <!-- .row close -->
      </div>
      <!-- .containe close -->
    </section>
    <!-- #price close -->
    <!--
    subscribe start
    ============================-->
    <Subscribe />
    <!--
    CONTACT US  start
    =============================-->
    <Contact />

    <Modal message="ได้รับข้อมูลเรียบร้อยแล้วครับ" />
  </div>
</template>


<style>
.modal-contact {
  z-index: 99999999;
}

.modal-backdrop.fade.in {
  z-index: 999999;
}
</style>

<script>
import Header from "@/components/Master/Header.vue";
import Footer from "@/components/Master/Footer.vue";
import SliderFood from "@/components/Home/SliderFood.vue";
import PriceList from "@/components/Home/PriceList.vue";
import Blog from "@/components/Home/Blog.vue";
import Contact from "@/components/Home/Contact.vue";
import Subscribe from "@/components/Home/Subscribe.vue";
import Modal from "@/components/Master/Modal.vue";

import axios from "axios";
export default {
  layout: "CoffeeLayout",
  data() {
    return {};
  },

  async asyncData({ $axios, params, store }) {
    const loadData = store.getters.getAllSliderHome;
    // console.log("loadData =",loadData);
    return { loadData };
  },
  methods: {
    initfn() {
      this.getAllUser();
    },
    getAllUser() {
      $("#owl-example").owlCarousel();
      $("#navigation").sticky({
        topSpacing: 75
      });

      $("#nav").onePageNav({
        currentClass: "current",
        changeHash: false,
        scrollSpeed: 15000,
        scrollThreshold: 0.5,
        filter: "",
        easing: "easeInOutExpo"
      });

      $("#top-nav").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 1200
      });
    }
  },
  mounted() {
    this.initfn();
  }
};
</script>


