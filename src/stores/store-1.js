import { defineStore } from "pinia";
import fetcher from "../services/fake-service-1";

export default function (storeName) {
  return defineStore(storeName, {
    state: () => ({
      pageData: null,
    }),

    actions: {
      async getData() {
        const data = fetcher();
        this.pageData = data;

        return data;
      },
    },
  });
}
