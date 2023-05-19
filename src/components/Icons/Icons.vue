<script setup lang="ts">
import { Icon } from "@vicons/utils";
const props = defineProps({
  color: String,
  size: Number,
});
</script>

<template>
  <Icon :color="props.color" :size="props.size">
    <slot></slot>
  </Icon>
</template>

<style scoped></style>
