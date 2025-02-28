<template>
  <div>
    <!-- Header-->
    <header class="bg-danger py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">Explore our best donuts</h1>
          <p class="lead fw-normal text-white-50 mb-0">
            They taste like paradise!
          </p>
        </div>
      </div>
    </header>

    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <DonutCard
            v-for="item in items"
            :key="item.id"
            :item="item"
            @showLove="showLove"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DonutCard from "@/components/DonutCard.vue";
import axios from "axios";

export default {
  components: {
    DonutCard,
  },
  data() {
    return {
      items: [],
      sampleItems: [
        {
          id: 1,
          name: "Original Glazed",
          description:
            "Our original glazed donut is a classic. It's a yeast-raised donut that's light and fluffy, and coated in a thin layer of our signature glaze.",
          image: new URL("../images/og-glazed.png", import.meta.url).href,
          alt: "The PDC Original Glazed Donut",
          loveCount: 8,
        },
        {
          id: 2,
          name: "Chocolate Glazed",
          description:
            "Our chocolate glazed donut is a classic. It's a yeast-raised donut that's light and fluffy, and coated in a thin layer of our signature chocolate glaze.",
          image: new URL("../images/chocolate-glazed.png", import.meta.url)
            .href,
          alt: "The PDC Chocolate Glazed Donut",
          loveCount: 5,
        },
      ],
      apiUrl: "https://ya3lcoo2gi.execute-api.us-east-1.amazonaws.com/prod",
    };
  },
  async created() {
    await this.fetchItems();
  },
  methods: {
    async fetchItems() {
      if (!this.apiUrl) {
        console.error(
          "API URL is not set or is invalid. Using default data instead."
        );
        this.items = this.sampleItems;
        return;
      }

      try {
        const response = await axios.get(`${this.apiUrl}/items`);
        this.items = response.data.filter(
          (item) => typeof item === "object" && item !== null
        );
      } catch (error) {
        console.error("Error fetching items:", error);
        this.items = this.sampleItems;
      }
    },
    async showLove(item) {
      if (!this.apiUrl) {
        console.error("API URL is not set. Cannot update love count for item.");
        return;
      }

      try {
        await axios.put(`${this.apiUrl}/items`, { id: item.id });
        item.loveCount += 1;
      } catch (error) {
        console.error("Error updating love count:", error);
      }
    },
  },
};
</script>

<style>
/* Add any additional styles here */
</style>
