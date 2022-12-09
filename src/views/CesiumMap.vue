<template>
  <div class="map" ref="domRef"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCesium } from "@wuzhiqin/vue3-hooks";
// import { addTdtXYZ } from "@/utils";

let domRef = ref();

onMounted(() => {
  let { viewer } = useCesium(domRef.value);
  // map.addLayer(addTdtXYZ());
  // map.addLayer(addTdtXYZ("cia", "c", 100));
  window.viewer = viewer;
});
</script>

<style scoped lang="less">
.map {
  width: 500px;
  height: 350px;
}
</style>
