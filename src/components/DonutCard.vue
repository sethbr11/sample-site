<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Love badge-->
      <div
        class="badge bg-danger text-white position-absolute"
        style="top: 0.5rem; left: 0.5rem"
        :title="'Love counter: reflects how many times the button has been clicked to show it some love'"
        data-bs-toggle="tooltip"
      >
        {{ item.loveCount }}
      </div>
      <!-- Product image-->
      <img class="card-img-top" :src="item.image" :alt="item.alt" />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ item.name }}</h5>
          <!-- Product description-->
          <p class="text-secondary">
            {{ item.description }}
          </p>
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <button
            class="btn btn-outline-dark mt-auto"
            @click="$emit('showLove', item)"
          >
            Show Some Love
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
