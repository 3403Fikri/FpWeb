<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import PopupModal from "./components/PopupModal.vue";
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <PopupModal :showModal="showModalNow" @closeModal="closeMyModal" :item="item"/>

  <nav class="navbar navbar-expand-lg fixed-top navbar-dark mb-5">
    <div class="container-fluid mx-5">
      <a class="navbar-brand" href="#"><b>Kualiner Jogja</b></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              to="/"
              active-class="active"
              class="nav-link"
              aria-current="page"
              href="#"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/katalog"
              active-class="active"
              class="nav-link"
              aria-current="page"
              href="#"
              >Katalog</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/about"
              active-class="active"
              class="nav-link"
              aria-current="page"
              href="#"
              >About Us</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView @toggleModal="toggleModal" />
</template> 
<script>
export default {
  data() {
    return {
      showModalNow: false,
      item: "",
    };
  },
  methods: {
    closeMyModal() {
      this.showModalNow = false;
    },
    toggleModal(event) {
      this.item = event;
      this.showModalNow = !this.showModalNow;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #599cff;
}
</style>


