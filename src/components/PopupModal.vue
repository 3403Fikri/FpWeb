<template>
    <teleport to="body">
    <div
      ref="modal"
      class="modal fade"
      :class="{ show: active, 'd-block': active }"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black">{{item.name}}</h5>
          
          </div>
          <div class="modal-body text-black">
            <ul >
                <li v-for="resto in item.resto" :key="resto.name">
                    <span class="restoName">{{resto.name}}</span>
                    <br>
                    <span class="restoAddress">{{resto.address}}</span>
                </li>
            </ul>
          </div>
          <div class="modal-footer text-black">
            <button type="button" class="btn btn-secondary" v-on:click="$emit('closeModal')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
    li{
        margin: 10px 0;
    }
</style>

<script>
export default {
  emits: ["closeModal"],
  props: {
    showModal: Boolean,
    item: Object,
  },
  watch: {
    showModal: {
      handler(newVal) {
        this.active = newVal;
        const body = document.querySelector("body");
        this.showModal ? body.classList.add("modal-open") : body.classList.remove("modal-open")
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      active: this.showModal,
    };
  },
};
</script>

