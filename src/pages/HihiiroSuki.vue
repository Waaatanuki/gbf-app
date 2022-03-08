<template>
  <div class="hihiirrosuki">
    <button @click="demo">测试</button>
  </div>
</template>

<script>
import localforage from "localforage";
import { exportToJson, importFromJson, clearDatabase } from "../assets/tools";
export default {
  name: "HihiiroSuki",

  setup() {
    const demo = async function () {
      const DBOpenRequest = window.indexedDB.open("gbfApp");
      DBOpenRequest.onsuccess = async function (event) {
        const db = DBOpenRequest.result;

        exportToJson(db, function (err, jsonString) {
          if (err) {
            console.error(err);
          } else {
            console.log("Exported as JSON: " + jsonString);
            clearDatabase(db, function (err) {
              if (!err) {
                // cleared data successfully
                importFromJson(db, jsonString, function (err) {
                  if (!err) {
                    console.log("Imported data successfully");
                  }
                });
              }
            });
          }
        });
      };

      // 存数据
      // localforage.config({
      //   name: "gbfApp",
      //   storeName: "BlueChests",
      // });
      // for (let i = 0; i < 10; i++) {
      //   await localforage.setItem(i.toString(), { name: "jerry1", age: i });
      // }
    };

    return { demo };
  },
};
</script>

<style>
</style>
