<script setup lang="ts">
const props = defineProps<{
  text: string;
  isSingleButton: boolean;
  buttonText?: string;
  buttonPrevText?: string;
  buttonNextText?: string;
}>();
</script>
<template>
  <div class="outer">
    <div class="text-area">{{ props.text }}</div>
    <div class="button-area">
      <div class="single-button" v-if="props.isSingleButton">
        <button>{{ props.buttonText }}</button>
      </div>
      <div class="double-button" v-else>
        <button class="prev">{{ props.buttonPrevText }}</button>
        <button class="next">{{ props.buttonNextText }}</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.outer {
  background-color: #33362f;
  width: 100%;
  height: 260px;
  padding: 55px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  font-size: 18px;
  color: #fff;
  margin: 80px 0;
}

.button-area {
  display: flex;
  justify-content: center;
  align-items: center;

  .double-button {
    display: flex;
    gap: 50px;

    .prev {
      color: #fff;
      border: 1px solid #fff;
      background-color: #33362f;

      &:hover {
        background-color: #000;
        border: 1px solid #000;
      }
    }
    .next {
      color: #33362f;
      border: 1px solid #fff;
      background-color: #fff;

      &:hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #000;
      }
    }
  }
  button {
    border-radius: 50px;
    padding: 17px 0;
    width: 300px;
  }
}
</style>
