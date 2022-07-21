<template>
  <div>
    <input type="text" v-model="searchText" @input="searchFood" placeholder="Cari makanan..." />
    <button @click="searchFood">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    searchFood() {
      this.$emit("searched", this.searchText);
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  props: {
    searchItem: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style scoped>
input {
  width: 389px;
  height: 39px;
  background-color: white;
  border-radius: 10px;
  border: 0px solid;
  outline: none;
  color: black;
  padding-left: 1rem;
}
button {
  float: right;
  z-index: 1;
  position: absolute;
  margin: 6px 0 0 -40px;
  background-color: transparent;
  font-size: 17px;
  border: 0px;
  cursor: pointer;
}

i {
  color: black;
}
</style>