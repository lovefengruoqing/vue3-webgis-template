<template>
  <div class="map" ref="domRef"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMap } from "@wuzhiqin/vue3-hooks";
import { addTdtXYZ } from "@/utils";

let domRef = ref();

onMounted(() => {
  let { map } = useMap(domRef.value);
  map.addLayer(addTdtXYZ());
  map.addLayer(addTdtXYZ("cia", "c", 100));
  window.map = map;
});
</script>

<style scoped lang="less">
.map {
  width: 500px;
  height: 350px;
}
</style>
