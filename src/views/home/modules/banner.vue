<script setup lang="ts">
import { getBanner } from "@/services/home";
import Icons from "@/components/Icons/Icons.vue";
import { Image48Filled } from "@vicons/fluent";
import { onMounted, ref } from "vue";

let banners = ref([]);
const render = () => {
  getBanner().then((res: any) => {
    banners.value = res.banners;
  });
};
onMounted(render);
</script>

<template>
  <el-carousel
    arrow="never"
    :interval="5000"
    type="card"
    style="width: 100%; height: auto"
  >
    <el-carousel-item v-for="item in banners" :key="item.encodeId">
      <el-image :src="item.imageUrl" style="width: auto; height: 285px">
        <template #error>
          <div class="image-slot">
            <Icons :size="100" color="#ec4141">
              <Image48Filled />
            </Icons>
          </div>
        </template>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="less" scoped>
.image-slot {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
