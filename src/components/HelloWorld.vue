<script setup lang="ts">
import Sidebar from "@/components/sidebar/sidebar.vue";
</script>

<template>
  <el-container>
    <!-- 左侧 -->
    <el-aside width="20%">
      <sidebar></sidebar>
    </el-aside>
    <!-- 主体 -->
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="less"></style>
