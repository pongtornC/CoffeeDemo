<template>
  <div>
    <!--
	header-img start 
    ==============================-->
    <section id="hero-area">
      <img class="img-responsive" src="@/assets/images/header.jpg" alt />
    </section>
    <!--
    Header start 
    ==============================-->
    <nav id="navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="block">
              <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-header">
                    <button
                      type="button"
                      class="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                    >
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/admin">
                      <img src="@/assets/images/logo.png" alt="Logo" />
                    </a>
                  </div>

                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right" id="top-nav">
                      <li>
                        <nuxt-link to="#hero-area">
                          Home
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#about-us">
                          about us
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#blog">
                          blog
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#price">
                          price
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#subscribe">
                          subscribe
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="#contact-us">
                          contact us
                        </nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/login">
                          login
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <!-- /.navbar-collapse -->
                </div>
                <!-- /.container-fluid -->
              </nav>
            </div>
          </div>
          <!-- .col-md-12 close -->
        </div>
        <!-- .row close -->
      </div>
      <!-- .container close -->
    </nav>
    <!-- header close -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>