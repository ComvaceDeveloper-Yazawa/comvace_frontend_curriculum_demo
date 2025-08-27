<script setup lang="ts">
defineProps<{
  title: string;
  isPc: boolean;
}>();
</script>
<template>
  <div class="page-title">
    {{ title }}
  </div>
</template>
<style scoped lang="scss">
.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin: 80px 0;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-bottom: #d89323 6px solid;
    width: 40px;
    margin-top: 8px;
  }
}
</style>
