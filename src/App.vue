<template></template>
<script>
import useFakeStore1 from "./stores/store-1";

const pageStore = useFakeStore1("fakeStore1");

export default {
  components: {},
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
    console.log(this.pageData);
  },
};
</script>
