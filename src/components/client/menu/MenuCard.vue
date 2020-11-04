<template>
  <div class="menu-card" data-aos="fade-up">
    <img v-lazy="imgSrc" alt="" />
    <div class="info-wraper">
      <div class="header">
        <p class="title">
          Original Angus Burger
          <!-- <template class="for-burger">
                <span class="weight">22 cm / 320 g</span>
              </template> -->
          <template class="for-pizza">
            <span class="weight">310 g</span>
          </template>
          <span class="price">$9.99</span>
        </p>
      </div>
      <p class="content">
        Stacked high with avocado, pepper Jack, red onion, roasted jalapeños,
        tomato & pickles
      </p>
      <div class="footer">
        <template class="for-burger">
          <span>Extra Patty <span class="extra">+$ 3.00</span></span>
          <span>Extra Cheese <span class="extra">+$ 1.00</span></span>
        </template>
        <!-- <template class="for-pizza">
              <span>27 cm / 480 g <span class="extra">$15.49</span></span>
              <span>32 cm / 810 g <span class="extra">$24.99</span></span>
            </template> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc:'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/04/burg-menu1-150x150.jpg'
    };
  },
};
</script>