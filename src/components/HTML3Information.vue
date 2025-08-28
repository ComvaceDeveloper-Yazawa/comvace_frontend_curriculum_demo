<script setup lang="ts">
import { ref } from "vue";
import ProductDetailModal from "@/components/modal/ProductDetailModal.vue";

const openProductDetailModal = ref<boolean>(false);

/**
 * Props:
 * - imageSrc: 魔法使い画像のURL（例：/images/mage.png）
 * - scale: ガイド全体の拡大率（0.8〜1.2 など）
 * - offsetRight / offsetBottom: 画面端からの余白（px）
 */
defineProps({
  imageSrc: {
    type: String,
    default: "/chara.png",
  },
  scale: {
    type: Number,
    default: 1,
  },
  offsetRight: {
    type: Number,
    default: 16,
  },
  offsetBottom: {
    type: Number,
    default: 16,
  },
});
</script>
<template>
  <main class="wrap" v-if="!openProductDetailModal">
    <section class="panel">
      <h1>課題3・案内</h1>
      <p class="hint" @click="openProductDetailModal = true">
        成果物1：商品詳細モーダルを表示
      </p>
      <p class="hint">成果物2：カート追加完了モーダルを表示</p>
      <p class="hint">成果物3：注文完了モーダルを表示</p>
      <p class="hint">成果物4：送信完了モーダルを表示</p>
    </section>

    <aside
      class="guide"
      :style="{
        '--guide-scale': scale,
        right: offsetRight + 'px',
        bottom: offsetBottom + 'px',
      }"
    >
      <div
        class="bubble"
        role="dialog"
        aria-live="polite"
        aria-label="課題3の案内"
      >
        <ul>
          <li>
            課題3は成果物が<strong>4つ</strong>あるので注意をしてください。
          </li>
          <li>
            それぞれ<strong>別々のHTMLファイル</strong>を作成してまとめてレビュー依頼に出してください。
          </li>
          <li>
            デモの展示は「<strong>×</strong>」ボタンと「<strong>買い物を続ける</strong>」ボタンを
            クリック or タップするとモーダルが閉じられますが、
            課題では<strong>開閉機能は実装対象外</strong>です。
          </li>
        </ul>
      </div>

      <img
        class="char"
        :src="imageSrc"
        alt="レトロRPG風の魔法使いキャラクター"
        decoding="async"
        loading="eager"
      />
    </aside>
  </main>
  <ProductDetailModal
    v-if="openProductDetailModal"
    v-model="openProductDetailModal"
  />
</template>

<style scoped>
/* ------- 全体の雰囲気（軽いレトロ調） ------- */
:root {
  --bg: #0f1220;
  --panel: #ffffff;
  --ink: #101215;
  --accent: #2bd2ff;
}

.wrap {
  min-height: 100%;
  min-height: 100dvh;
  place-items: center;
  padding: 6rem 1rem 10rem;
  color: #e8f1ff;
  background: radial-gradient(
    1200px 600px at 70% 20%,
    #1b2140 0%,
    #0f1220 60%,
    #0a0d19 100%
  );
  font-family: system-ui, -apple-system, "Hiragino Kaku Gothic ProN",
    "Yu Gothic", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.panel {
  width: min(920px, 95vw);
  background: rgba(255, 255, 255, 0.06);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(6px);
}

h1 {
  margin: 0 0 8px;
  font-size: clamp(24px, 4vw, 40px);
  letter-spacing: 0.06em;
  text-shadow: 0 0 8px rgba(43, 210, 255, 0.35);
}

.panel p {
  line-height: 1.9;
}

.hint {
  color: #b6e6ff;
  cursor: pointer;
}

/* ------- 右下の案内（吹き出し＋キャラ） ------- */
.guide {
  position: fixed;
  display: flex;
  gap: 12px;
  align-items: flex-end;
  z-index: 10;
  transform: scale(var(--guide-scale, 1));
  transform-origin: 100% 100%;
}

.bubble {
  max-width: min(75vw, 520px);
  color: var(--ink);
  background: var(--panel);
  border: 4px solid #111;
  padding: 14px 16px;
  border-radius: 10px;
  box-shadow: 0 0 0 4px #fff inset, 0 8px 0 #111;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
  position: relative;
}

.bubble ul {
  margin: 0;
  padding-left: 1.2em;
}
.bubble li {
  margin: 0.3em 0;
}

.char {
  width: min(24vw, 180px);
  height: auto;
  image-rendering: pixelated;
  filter: drop-shadow(0 6px 0 #111) drop-shadow(0 10px 16px rgba(0, 0, 0, 0.35));
  user-select: none;
  -webkit-user-drag: none;
}

@media (max-width: 480px) {
  .guide {
    flex-direction: column;
    align-items: flex-end;
  }
  .bubble {
    max-width: 92vw;
  }
}
</style>
