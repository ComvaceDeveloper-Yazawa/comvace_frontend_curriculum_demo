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
  <div class="mobile-outer">
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
.mobile-outer {
  background-color: #33362f;
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  font-size: 14px;
  color: #fff;
  margin-top: 50px;
}

.button-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .double-button {
    display: flex;
    flex-direction: column;
    gap: 27px;

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
    padding: 10px 0;
    width: 200px;
  }
}
</style>
