<template>
  <div id="app">
    <div>
      <!-- Nav Bar -->
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">{{ SiteName }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/">
                <span class="navbarcolor"> Home </span>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>


<script>
import SiteData from "./SiteData";

export default {
  data: function () {
    return SiteData.state;
  },
  name: "App",
};
</script>



<style scoped>
.navbarcolor {
  color: rgb(17, 13, 1);
}
.navbar {
  background-color: rgb(196, 138, 15) !important;
}
</style>