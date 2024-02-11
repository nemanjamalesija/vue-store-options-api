<template>
  <Component2 />
</template>
<script>
import Component2 from "./Component-2.vue";
import useFakeStore1 from "./stores/store-1";
import { mapState } from "pinia";

const useMainStore = useFakeStore1("fakeStore1");

export default {
  components: { Component2 },

  computed: {
    ...mapState(useMainStore, ["pageData"]),
  },

  methods: {
    async fetchData() {
      return await useMainStore().initStores();
    },
  },

  async created() {
    await this.fetchData();

    console.log("comming from app (store 1)");
    console.log(this.pageData);
  },
};
</script>
