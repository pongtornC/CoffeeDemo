<template>
  <div>
    <nav class="navbar navbar-default mb-0">
      <div class="container-fluid">
        <div class="navbar-header">
          <nuxt-link class="navbar-brand" to="/">SP Coffee Shop</nuxt-link>
        </div>
        <ul class="nav navbar-nav">
          <li class="active">
            <nuxt-link to="/admin">Main</nuxt-link>
          </li>
          <li class="dropdown">
            <nuxt-link to="" class="dropdown-toggle" data-toggle="dropdown">
              Banner
              <span class="caret"></span>
            </nuxt-link>
            <ul class="dropdown-menu">
              <li>
                <nuxt-link to="/admin/banner#bannersilder">Silder Banner</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/banner#bannerblog">Blog Banner</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/banner#bannerfooter">Footer Banner</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/admin/food">Food</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/contact">Contact US</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/user">User</nuxt-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">สวัสดีคุณ {{username}}</a>
          </li>
          <li>
            <a href="#" @click="LogOut()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">จัดการระบบหลังบ้าน</h1>
        <p class="lead">สวัสดีคุณ {{username}}</p>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  mounted() {
    this.storage();
  },
  methods: {
    storage() {
      this.username = localStorage.getItem("userName");
    },
    LogOut(){
      alert(1);
    }
  }
};
</script>