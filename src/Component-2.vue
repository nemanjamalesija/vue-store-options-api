<template></template>
<script>
import useFakeStore2 from "./stores/store-2";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useFakeStore2, ["pageData"]),
  },

  async mounted() {
    console.log("Comming from component 2");
    console.log(this.pageData);
  },
};
</script>
