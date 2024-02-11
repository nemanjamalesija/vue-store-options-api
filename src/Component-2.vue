<template></template>
<script>
import useFakeStore1 from "./stores/store-1";
import { mapState } from "pinia";

const usePageStore = useFakeStore1("fakeStore1");

export default {
  pageStores: [usePageStore],

  computed: {
    ...mapState(usePageStore, ["pageData"]),
  },

  async created() {
    await usePageStore().getData();

    console.log("comming from component 2");
    console.log(this.pageData);
  },
};
</script>
