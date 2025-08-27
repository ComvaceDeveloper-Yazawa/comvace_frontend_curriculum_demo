<script setup lang="ts">
import NavigationModal from "@/components/NavigationModal.vue";
import AssignmentHTML1 from "@/components/AssignmentHTML1.vue";
import AssignmentHTML2 from "@/components/AssignmentHTML2.vue";
import AssignmentHTML3 from "@/components/AssignmentHTML3.vue";
import AssignmentHTML4 from "@/components/AssignmentHTML4.vue";
import { ref } from "vue";

const isMenuDisplay = ref<boolean>(true);
const selectedMenu = ref<string>("main");
const displayPages = ref<string>("main");
const selectedDevice = ref<string>("");

const selectedAssignment = (pageIndex: string) => {
  displayPages.value = pageIndex;
  selectedMenu.value = "device";
};
const selectedDeviceHandler = (device: string) => {
  selectedDevice.value = device;
  isMenuDisplay.value = false;
};
</script>

<template>
  <div
    :class="isMenuDisplay === true ? 'index-outer' : 'none'"
    v-if="isMenuDisplay === true"
  >
    <nav v-if="selectedMenu === 'main'" class="scroll-pane">
      <h2>めにゅー</h2>
      <p @click="selectedMenu = 'html'">HTML</p>
      <p @click="selectedMenu = 'vue'">Vue</p>
    </nav>

    <nav v-if="selectedMenu === 'html'" class="scroll-pane">
      <h2 @click="selectedMenu = 'main'">もどる</h2>
      <p @click="selectedAssignment('1')">課題1</p>
      <p @click="selectedAssignment('2')">課題2</p>
      <p @click="selectedAssignment('3')">課題3</p>
      <p @click="selectedAssignment('4')">課題4</p>
      <p @click="selectedAssignment('5')">課題5</p>
      <p @click="selectedAssignment('6')">課題6</p>
    </nav>

    <nav v-if="selectedMenu === 'vue'" class="scroll-pane">
      <h2 @click="selectedMenu = 'main'">もどる</h2>
      <p>作成中</p>
    </nav>

    <nav v-if="selectedMenu === 'device'" class="scroll-pane">
      <h2 @click="selectedMenu = 'main'">もどる</h2>
      <p @click="selectedDeviceHandler('pc')">PC</p>
      <p @click="selectedDeviceHandler('sp')">SP</p>
    </nav>
  </div>
  <NavigationModal v-if="isMenuDisplay === false" />
  <AssignmentHTML1 v-if="displayPages === '1' && selectedDevice === 'pc'" />
  <AssignmentHTML2 v-if="displayPages === '1' && selectedDevice === 'sp'" />
  <AssignmentHTML3 v-if="displayPages === '2' && selectedDevice === 'pc'" />
  <AssignmentHTML4 v-if="displayPages === '2' && selectedDevice === 'sp'" />
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

.index-outer {
  cursor: url("/cursor-sword-32.png") 0 0, auto !important;
  font-family: "DotGothic16", sans-serif;
  width: 100vw;
  height: 100svh;
  background: url("/firstview.png") center/cover no-repeat;
  display: grid;
  place-items: center;
}

.none {
  display: none;
}

/* スクロールさせるパネル */
nav.scroll-pane {
  font-size: 3rem;
  border: 4px solid #fff;
  color: #fff;
  background-color: #000;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-height: min(70vh, 640px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  /* スクロールバー(任意) */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #111;
  }

  /* ヘッダを常に上に固定 */
  h2 {
    padding: 16px 0 16px;
    width: 100%;
    background: #000; /* スクロール時に透けないように */
    border-bottom: 2px solid #333;
  }

  p {
    position: relative;
    display: block;
    padding-bottom: 6px;
    margin: 0;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #ffeb3b;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }
    &:hover {
      cursor: url("/cursor-sword-32-glow.png") 0 0, auto !important;
      color: #ffeb3b;
      text-shadow: 0 0 6px #fff, 0 0 12px #ff0;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
}
</style>
