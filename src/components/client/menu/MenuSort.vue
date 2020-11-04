<template>
  <div class="menu-sort">
    <div class="full-screen-cover">
			<h2>SORTABLE  MENU</h2>
		</div>
    <span class="summary">Multiple categories with sortable filters</span>
    <ul class="category">
      <li class="options">
        <a href="#">Burger</a>
        <a href="#">Pizza</a>
        <a href="#" class="active">Sides</a>
        <a href="#">Desserts</a>
        <a href="#">Drinks</a>
      </li>
      <li class="default">
        <a href="#" class="active">Show All</a>
      </li>
    </ul>
    <div class="product-list">
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  </div>
</template>
<script>
import MenuCard from "@/components/client/menu/MenuCard.vue";
export default {
  components: {
    MenuCard,
  },
  data() {
    return {};
  },
};
</script>
