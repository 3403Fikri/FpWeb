<template>
  <div class="foodcard text-center">
    <div class="img">
      <slot name="image" class="image"></slot>
    </div>
    <div class="body">
      <span class="nama"><slot name="nama"></slot></span>
      <p class="deskripsi"><slot name="deskripsi"></slot></p>
    </div>
    <div class="footer">
      <button @click="showDetail">Lokasi</button>
    </div>
  </div>
</template>


<script>
export default {
  props: ['itemData'],
  methods: {
    showDetail(event) {
      this.$emit('showDetail', this.itemData)
    }
  }
}
</script>

<style scoped>
* {
  color: black;
}
.foodcard {
  margin: 20px;
  width: 300px;
  height: 400px;
  background-color: #d6e5ff;
  border-radius: 20px;
}

.img {
  height: 187px;
}
.body {
  height: 153px;
  padding: 0 5px 0 5px;
}
.nama {
  font-weight: bold;
  font-size: 20px;
}
p {
  margin-top: 1rem;
}
.footer {
  height: 60px;
  background-color: #9fcffb;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
}

button {
  background: transparent;
  border: 0px;
  font-size: 20px;
  font-weight: 500;
}
</style>