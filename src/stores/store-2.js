import { defineStore } from "pinia";
import fetcher from "../services/fake-service-2";

export default defineStore("fakeStore2", {
  state: () => ({
    pageData: null,
  }),

  actions: {
    getData() {
      return (this.pageData = fetcher());
    },
  },
});
