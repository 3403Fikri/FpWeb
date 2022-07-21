<script setup>
import KatalogSearch from "../components/KatalogSearch.vue";
import FoodCard from "../components/FoodCard.vue";
</script>

<template>
  <section class="katalog">
    <div class="d-flex flex-column align-items-center">
      <span class="title">Katalog</span>

      <div class="align-self-end m-4">
        <KatalogSearch @searched="searchFood($event)" />
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <FoodCard
          v-for="item in items"
          :key="item.id"
          :itemData="item"
          @showDetail="toggleModal"
        >
          <template #image>
            <img :src="getImageUrl(item.imagePath)" />
          </template>
          <template #nama>{{ item.name }} </template>
          <template #deskripsi> {{ readMore(item.desc, 16) }} </template>
        </FoodCard>
      </div>
    </div>
  </section>
</template>

<script>
import itemsData from "@/assets/Items.json";

export default {
  methods: {
    readMore(string, maxWords) {
      var strippedString = $("<p>" + string + "</p>")
        .text()
        .trim();
      var array = strippedString.split(" ");
      var wordCount = array.length;
      var string = array.splice(0, maxWords).join(" ");

      if (wordCount > maxWords) {
        string += "...";
      }

      return string;
    },
    getImageUrl(name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
    searchFood(value) {
      let obj = itemsData.filter((o) => o.name.toLowerCase().includes(value));
      this.items = obj;
    },
    toggleModal(event) {
      this.$emit("toggleModal", event);
    },
  },
  mounted: () => {
    document.body.style.backgroundColor = "#599CFF";
  },
  data() {
    return {
      items: itemsData,
    };
  },
};
</script>

<style scoped>
.katalog {
  margin-top: 3rem;
  color: white;
}

.katalog .title {
  font-size: 30px;
  font-weight: bold;
}

.search-form {
  align-items: flex-end;
}

img {
  height: 187px;
}
</style>