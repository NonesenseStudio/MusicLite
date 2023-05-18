<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getQrCreate, getQrKey } from "@/services/login";

let img = ref();
const createQr = (key) => {
  if (key) {
    getQrCreate(key).then((res) => {
      img.value = res.data.qrimg;
    });
  }
};
onMounted(() => {
  getQrKey().then((res: any) => {
    createQr(res.data.unikey);
  });
});
</script>

<template><img :src="img" alt="qrcode" /></template>

<style scoped></style>
