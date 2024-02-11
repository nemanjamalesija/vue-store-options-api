<template>
  <Component2 />
</template>
<script>
import Component2 from "./Component-2.vue";
import useFakeStore1 from "./stores/store-1";

const pageStore = useFakeStore1("fakeStore1");

export default {
  components: { Component2 },
  data() {
    return {
      pageData: null,
    };
  },
  computed: {},

  methods: {
    async fetchData() {
      return await pageStore().getData();
    },
  },

  async mounted() {
    this.pageData = await this.fetchData();

    console.log("Comming from component 1 (app)");
    console.log(this.pageData);
  },
};
</script>
