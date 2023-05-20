<script setup lang="ts">
import { ref } from "vue";
import Icons from "@/components/Icons/Icons.vue";
import { Home12Regular } from "@vicons/fluent";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const onSelect = (index: any, indexPath: any, item: any, routerResult: any) => {
  console.log(
    "index" + index,
    "indexPath" + indexPath,
    "item" + item,
    "routerResult" + routerResult
  );
};
</script>

<template>
  <el-menu
    default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="onSelect"
    router
  >
    <el-menu-item index="/" router="/">
      <Icons style="margin-right: 5px">
        <Home12Regular />
      </Icons>
      <span>主页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <!--          <el-icon><icon-menu /></el-icon>-->
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <!--          <el-icon><document /></el-icon>-->
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <!--          <el-icon><setting /></el-icon>-->
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="less"></style>
