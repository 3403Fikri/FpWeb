<script setup>
  import ProfileAboutUsItem from '../components/ProfileAboutUsItem.vue';
</script>

<template>
  <div class="container">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <span class="title">About Us</span>
      <span class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </span>
        <ProfileAboutUsItem/>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    document.body.style.backgroundColor = "#599CFF"
  }
}
</script>

<style scoped>
* {
  color: white;
  margin-top: 3rem;
}

.title {
  font-size: 48px;
}

.description {
  font-size: 32px;
}
</style>