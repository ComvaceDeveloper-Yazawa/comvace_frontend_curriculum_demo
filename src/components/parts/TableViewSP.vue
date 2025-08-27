<script setup lang="ts">
import { ref } from "vue";
import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu5 from "@/assets/menu5.png";
import menu6 from "@/assets/menu6.png";

interface ProductCartListHeaderModel {
  id: number;
  header: string;
}

interface ProductCartListModel {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  alt: string;
}

const productCartListHeader = ref<ProductCartListHeaderModel[]>([
  {
    id: 1,
    header: "商品",
  },
  {
    id: 2,
    header: "金額",
  },
  {
    id: 3,
    header: "数量",
  },
]);

const productCartList = ref<ProductCartListModel[]>([
  {
    id: 1,
    name: "アロマブレンド珈琲豆",
    price: 3350,
    quantity: 1,
    image: menu1,
    alt: "アロマブレンド珈琲豆の写真",
  },
  {
    id: 2,
    name: "マイルドブレンド珈琲豆",
    price: 3350,
    quantity: 1,
    image: menu2,
    alt: "マイルドブレンド珈琲豆の写真",
  },
  {
    id: 3,
    name: "カリビアンクイーン珈琲豆",
    price: 5850,
    quantity: 1,
    image: menu6,
    alt: "カリビアンクイーン珈琲豆の写真",
  },
  {
    id: 4,
    name: "クリスタルマウンテン珈琲豆",
    price: 7850,
    quantity: 1,
    image: menu5,
    alt: "クリスタルマウンテン珈琲豆の写真",
  },
]);
</script>
<template>
  <table border="1">
    <thead>
      <tr>
        <th v-for="v in productCartListHeader" :key="v.id">{{ v.header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in productCartList" :key="i.id">
        <td>
          <div class="product-flex-box">
            <div class="product-area">
              <img class="product-image" :src="i.image" :alt="i.alt" />
            </div>
            <div class="product-text-area">
              <p>{{ i.name }}</p>
              <img
                class="trush-icon"
                src="@/assets/trush-box.png"
                alt="購入予定商品の削除アイコン"
              />
            </div>
          </div>
        </td>
        <td>{{ i.price }}</td>
        <td>{{ i.quantity }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped lang="scss">
// 横幅は100％、親コンポーネントで外の余白は調整が必要
table {
  width: 100%;
  border-collapse: collapse;
  border: #a5a5a5 solid 1px;
}

th {
  height: 70px;
  background-color: #33362f;
  color: #ffffff;
  font-size: 22px;
  letter-spacing: 0.5em;
}

th:first-child {
  width: 60%;
}

th:not:first-child {
  width: 20%;
}

td {
  height: 120px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 400;

  .product-flex-box {
    display: flex;
    align-items: center;
    padding: 10px !important;

    .product-area {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .product-text-area {
      display: flex;
      flex-direction: column;
    }

    .product-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }

    .trush-icon {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  &:not(:first-child) {
    text-align: right;
  }
}
</style>
