import { defineStore } from "pinia";
import fetcher from "../services/fake-service-1";
import useFakeStore2 from "./store-2";

export default function (storeName) {
  return defineStore(storeName, {
    state: () => ({
      pageData: null,
    }),

    actions: {
      async initStores() {
        this.pageData = fetcher();
        useFakeStore2().getData();

        console.log("comming from store 1");
        console.log(this.pageData);
      },
    },
  });
}
