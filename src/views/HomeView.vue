
<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <div class="containerr text-white">
            <span style="font-size: 24px"><b>Gudeg</b></span>
            <p class="mt-4" style="font-size: 24px">
              Gudeg adalah makanan tradisional khas Yogyakarta, yang terbuat
              dari nangka muda dan dimasak menggunakan santan
            </p>
          </div>
          <img src="@/assets/img/food1.png" class="d-block" alt="..." />
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <div class="containerr text-white">
            <span style="font-size: 24px"><b>Gudeg</b></span>
            <p class="mt-4" style="font-size: 24px">
              Gudeg adalah makanan tradisional khas Yogyakarta, yang terbuat
              dari nangka muda dan dimasak menggunakan santan
            </p>
          </div>
          <img src="@/assets/img/food1.png" class="d-block" alt="..." />
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <div class="containerr text-white">
            <span style="font-size: 24px"><b>Gudeg</b></span>
            <p class="mt-4" style="font-size: 24px">
              Gudeg adalah makanan tradisional khas Yogyakarta, yang terbuat
              dari nangka muda dan dimasak menggunakan santan
            </p>
          </div>
          <img src="@/assets/img/food1.png" class="d-block" alt="..." />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    document.body.style.backgroundColor = "#599CFF";
  },
};
</script>

<style scoped>
.carousel {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.carousel-item img {
  width: 25%;
  height: 50vh;
}

.containerr {
  width: 30rem;
}
</style>
