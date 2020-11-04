<template>
  <div class="menu-section">
    <div data-aos="fade-up">
      <div v-lazy:background-image="imgUrl[0]" class="bg-section">
        <h2>CHARGRILLED BURGERS</h2>
        <p>
            Hand-crafted fresh to order. Served with garlic dill pickles & fries.
        </p>
      </div>
      <div class="container">
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
      </div>
    </div>

    <div data-aos="fade-up">
      <div v-lazy:background-image="imgUrl[1]" class="bg-section">
        <h2>GOURMET PIZZA</h2>
        <p>Made with our signature buttery, flaky crust.</p>
      </div>
      <div class="container">
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
      </div>
    </div>

    <div data-aos="fade-up">
      <div v-lazy:background-image="imgUrl[2]" class="bg-section">
        <h2>SIDES & SALADS</h2>
        <p>For every main dish, there is a perfect side.</p>
      </div>
      <div class="container">
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </div>
    </div>

    <div data-aos="fade-up">
      <div v-lazy:background-image="imgUrl[3]" class="bg-section">
        <h2>TREATS & SWEETS</h2>
        <p>Big enough to share, but too good to actually do it.</p>
      </div>
      <div class="container">
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </div>
    </div>
    
    <div data-aos="fade-up">
      <div v-lazy:background-image="imgUrl[4]" class="bg-section">
        <h2>DRINKS</h2>
        <p>Enjoy our house-made lemonades, teas & soft drinks.</p>
      </div>
      <div class="container">
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
      </div>
    </div>
  </div>
</template>
<script>
import MenuCard from "@/components/client/menu/MenuCard.vue";
export default {
  components:{
    MenuCard
  },
  data() {
    return {
      imgUrl:[
        'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/back-burger-title.jpg?id=2140',
        'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/back-pizza-title.jpg?id=2137',
        'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/back-sides-title2.jpg?id=2144',
        'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/back-dessert-title1.jpg?id=2149',
        'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/back-drinks-title2.jpg?id=2146'
      ]
    };
  },
};
</script>
