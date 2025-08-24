<script setup lang="ts">
import NavigationModal from "./NavigationModal.vue";
</script>
<template>
  <div class="main-view">
    <p>コーヒーショップを作ってみよう</p>
    <img src="/src/assets/main-view.png" alt="" />
  </div>
  <div class="content">
    <div class="searchbar-area">
      <div class="label">商品一覧</div>
      <div class="function">
        <div class="search">
          <input type="text" placeholder="" />
          <button>検索</button>
        </div>
        <div class="select">
          <select name="category" id="category">
            <option value="dummy" disabled selected hidden>並び替え</option>
            <option value="asc">料金が安い順</option>
            <option value="desc">料金が高い順</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <NavigationModal />
</template>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap");

body {
  font-family: "Noto Sans JP", "Noto Sans", system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", "Yu Gothic UI", "Yu Gothic", Meiryo, sans-serif;
}

.main-view {
  position: relative;
  height: 750px;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 30px;
    background-color: #fff;
    padding: 16px 49px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  background-color: #fff9f4;
  padding: 80px 90px;
  max-width: 1260px;
}

.searchbar-area {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #33362f;
  padding: 15px 50px;
  .label {
    font-size: 22px;
    color: #fff;
  }
  .function {
    align-items: center;
    display: flex;
    margin-left: auto;
    gap: 30px;
    .search {
      input[type="text"] {
        width: 300px;
        height: 40px;
      }
      display: flex;
      gap: 10px;
    }
    .select {
      select {
        height: 40px;
        padding: 0 15px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        background-color: #fff;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url("/src/assets/selector.png") no-repeat right 10px center
          #fff;
      }
    }
  }
}
</style>
