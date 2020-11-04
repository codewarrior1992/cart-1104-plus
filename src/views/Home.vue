<template>
	<div class="home-page">
		<Header/>
		<div class="full-screen-swiper">
			<swiper :options="swiperOption" class="swiper-wraper container">
			<swiper-slide class="swiper-slide-wraper">
				<img v-lazy="carousel[0]" class="bg-img"/>
				<div class="info">
				<h3>Your Burger Your Way</h3>
				<p>Choose your Favorite ingredients</p>
				<router-link to="" class="menu-link">Order Now</router-link>
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide-wraper">
				<img v-lazy="carousel[1]" class="bg-img"/>
				<div class="info">
				<h3>Your Burger Your Way</h3>
				<p>Choose your Favorite ingredients</p>
				<router-link to="" class="menu-link">Order Now</router-link>
				</div>
			</swiper-slide>
			<swiper-slide class="swiper-slide-wraper">
				<img v-lazy="carousel[2]" class="bg-img"/>
				<div class="info">
				<h3>Your Burger Your Way</h3>
				<p>Choose your Favorite ingredients</p>
				<router-link to="" class="menu-link">Order Now</router-link>
				</div>
			</swiper-slide>
			</swiper>
		</div>
		<!-- introduction -->
		<div class="main-intro">
			<div class="main-info">
				<span class="">Our Signature</span>
				<h2>CHAR-GRILLED BURGERS</h2>
				<p>
					Hand-crafted fresh to order. Smashed to lock in flavor on a
					toasted brioche bun. Served with garlic dill pickles & fries.
				</p>
			</div>
			<div class="present-list container"  data-aos="zoom-out-up" data-aos-duration="1000">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<router-link to="" class="main-link">MORE BURGERS</router-link>
		</div>
		<div class="battle-ground">
			<div class="container">
				<h2>U Don’t Have To Choose a *Side</h2>
				<div class="photos">
						<div class="item">
							<img
								src="@/../public/images/side/hand-breaded-tenders.png"
								alt=""
							/>
							<p>HAND-BREADED</p>
							<span>CRISPY TENDERS</span>
						</div>
						<div class="item">
							<img src="@/../public/images/others/vintage-burst2.png" alt="" />
						</div>
						<div class="item">
							<img src="@/../public/images/side/naked-tenders.png" alt="" />
							<p>HAND-BREADED</p>
							<span>CRISPY TENDERS</span>
						</div>
				</div>
			</div>
		</div>
		<div class="sub-intro">
			<div class="sub-info">
				<h2>MORE GREAT SIDES</h2>
				<p>
					For every main dish, there is a perfect side.
				</p>
			</div>
			<div class="present-list container" data-aos="zoom-out-up" data-aos-duration="1000">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
		<!-- offers-group -->
		<div class="offers-group container">
			<h2 class="title">what we offers</h2>
			<div class="offers">
						<div class="item">
							<span class="flaticon-034-waiter"></span>
							<h5>Friendly Service</h5>
							<p>
								Filet mignon buffalo shankle leberkas, porchetta
								frankfurter.
							</p>
						</div>
						<div class="item">
							<span class="flaticon-047-menu"></span>
							<h5>Original Recipes</h5>
							<p>
								Filet mignon buffalo shankle leberkas, porchetta
								frankfurter.
							</p>
						</div>
						<div class="item">
							<span class="flaticon-038-take-away"></span>
							<h5>Convenient Locations</h5>
							<p>
								Filet mignon buffalo shankle leberkas, porchetta
								frankfurter.
							</p>
						</div>
						<div class="item">
							<span class="flaticon-031-delivery"></span>
							<h5>Fast Dlivery</h5>
							<p>
								Filet mignon buffalo shankle leberkas, porchetta
								frankfurter.
							</p>
						</div>
			</div>
		</div>
		<!-- subscription" -->
		<div class="subscription">
			<div class="container subscript-wraper">
								<div>
						<h2>Love Burgers? Like Deals?</h2>
						<p>
							Be the first to know about our newsest menu item and latest
							offers
						</p>
					</div>
					<div class="send">
						<input type="email" placeholder="Please leave your email ..." />
						<i class="far fa-envelope"></i>
						<a href="#">Send</a>
					</div>
			</div>
		</div>
		<Footer/>
	</div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Footer from '@/components/client/Footer.vue';
import Card from '@/components/client/Card.vue';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	name: 'Home',
	components: {
		Header,
		Footer,
		Card,
		swiper,
		swiperSlide,
	},
	data(){
		return {
			img:"https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-680x680.jpg",
			carousel:[
			'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/burger-shake-combo.png',
			'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/build-sticks.png',
			'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/build-burger2.png'
			],
			swiperOption: {
				spaceBetween: 30,
				centeredSlides: true,
				loop: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
			},
		}
	}
}
</script>