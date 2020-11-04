<template>
	<div>
        <div class="article-card container">
            <router-link to="">HOME /</router-link>
            <router-link to=""> BLOG /</router-link>
            <span> SMALL BATCH TRIPLE CHEESE LOAF SANDWICHES</span>
            <h1>SMALL BATCH TRIPLE CHEESE LOAF SANDWICHES</h1>
            <div class="author">
                <img v-lazy="imgUrl[0]" alt=""> 
                <span> Althemist </span>
                <span><i class="far fa-clock"></i>June 6, 2018</span>
                <span><i class="fas fa-tag"></i>FOOD</span>
                <span><i class="far fa-comment"></i>2</span>
            </div>
            <div class="bg-cover" v-lazy:background-image="imgUrl[1]" :style="{'background-image': `url(${img})`}"></div>
            <div class="main-content">
                <h2>Jerky cow pork belly sausage</h2>
                <p>Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, meatball bresaola bacon boudin tri-tip pig pork fatback pork chop prosciutto short ribs pork belly. Ham boudin rump strip steak, porchetta drumstick picanha spare ribs sausage. Tongue ham hock turkey kevin ham short loin tenderloin beef ribs shank turducken chicken. Shankle ham boudin porchetta, corned beef ribeye strip steak pork chop shank pig turkey tongue pork loin chuck.</p>
                <p>Filet mignon buffalo shankle leberkas, porchetta frankfurter tri-tip sirloin pancetta hamburger t-bone tongue picanha. Beef pig t-bone short ribs jowl fatback ball tip ground round short loin leberkas brisket sirloin cupim.</p>
            </div>
            <div class="sub-content">
                <div class="left">
                    <div class="phase">
                        <h2>Meatloaf drumstick</h2>
                        <p> Burgdoggen chuck buffalo rump venison cow sirloin flank swine. Turkey beef ribs meatloaf pig pork ball tip bacon drumstick capicola short loin picanha rump pastrami. T-bone capicola chuck bresaola tenderloin.</p>
                    </div>
                    <div class="phase">
                        <h2>Sausage pork loin</h2>
                        <p> Spare ribs prosciutto chicken alcatra bacon pancetta biltong doner ham. Ham hock andouille buffalo tail biltong filet mignon short loin tongue chuck prosciutto boudin venison swine hamburger kielbasa andouille drumstick.</p>
                    </div>
                </div>
                <div class="right">
                    <div class="phase">
                        <h2>Adiosuh  Kfwccoin</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero, debitis, dolores voluptas molestias iure, sed nobis qui ipsam magnam atque nisi ratione ea. Voluptatum voluptate dicta ipsa, excepturi libero saepe ex? Temporibus fugiat natus, tenetur aut deserunt rem ad blanditiis dolores perspiciatis reprehenderit laudantium itaque molestias voluptatem voluptas quia, minus ipsum, vel quos eius facilis eum voluptate. Suscipit accusantium quaerat aliquid voluptas distinctio quasi earum molestias qui mollitia! Nisi, consequuntur odio reprehenderit autem inventore eum in dolorum alias, exercitationem atque tempore aliquam optio dolores quidem quaerat unde amet cumque aspernatur commodi? Impedit est possimus obcaecati libero natus vero omnis.</p>
                    </div>
                </div>
            </div>
            <h2 class="recommend-title">Interested? You can order them here:</h2>
            <div class="present-list">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <!-- <swiper :options="listOption" class="container">
                <swiper-slide>
                    <div class="client-card">
                        <div class="card-head"  v-lazy:background-image="img">
                        <i class="fas fa-heart"></i>
                        <router-link to="" class="link"></router-link>
                    </div>
                    <div class="card-content">
                        <div class="info">
                            <ul class="ratings">
                            <li class="rating-item" data-rating="1"></li>
                            <li class="rating-item" data-rating="2"></li>
                            <li class="rating-item" data-rating="3"></li>
                            <li class="rating-item active" data-rating="4"></li>
                            <li class="rating-item" data-rating="5"></li>
                            </ul>
                            <span class="price">$249.00</span>
                        </div>
                        <h2>bacon cheese burger</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis.
                        </p>
                        <a href="#" class="cart">Add to Cart</a>
                    </div>
                    </div>
                </swiper-slide>
                <swiper-slide >
                    <div class="client-card">
                        <div class="card-head"  v-lazy:background-image="img">
                        <i class="fas fa-heart"></i>
                        <router-link to="" class="link"></router-link>
                    </div>
                    <div class="card-content">
                        <div class="info">
                            <ul class="ratings">
                            <li class="rating-item" data-rating="1"></li>
                            <li class="rating-item" data-rating="2"></li>
                            <li class="rating-item" data-rating="3"></li>
                            <li class="rating-item active" data-rating="4"></li>
                            <li class="rating-item" data-rating="5"></li>
                            </ul>
                            <span class="price">$249.00</span>
                        </div>
                        <h2>bacon cheese burger</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis.
                        </p>
                        <a href="#" class="cart">Add to Cart</a>
                    </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="client-card">
                        <div class="card-head"  v-lazy:background-image="img">
                        <i class="fas fa-heart"></i>
                        <router-link to="" class="link"></router-link>
                    </div>
                    <div class="card-content">
                        <div class="info">
                            <ul class="ratings">
                            <li class="rating-item" data-rating="1"></li>
                            <li class="rating-item" data-rating="2"></li>
                            <li class="rating-item" data-rating="3"></li>
                            <li class="rating-item active" data-rating="4"></li>
                            <li class="rating-item" data-rating="5"></li>
                            </ul>
                            <span class="price">$249.00</span>
                        </div>
                        <h2>bacon cheese burger</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis.
                        </p>
                        <a href="#" class="cart">Add to Cart</a>
                    </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="client-card">
                        <div class="card-head"  v-lazy:background-image="img">
                        <i class="fas fa-heart"></i>
                        <router-link to="" class="link"></router-link>
                    </div>
                    <div class="card-content">
                        <div class="info">
                            <ul class="ratings">
                            <li class="rating-item" data-rating="1"></li>
                            <li class="rating-item" data-rating="2"></li>
                            <li class="rating-item" data-rating="3"></li>
                            <li class="rating-item active" data-rating="4"></li>
                            <li class="rating-item" data-rating="5"></li>
                            </ul>
                            <span class="price">$249.00</span>
                        </div>
                        <h2>bacon cheese burger</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis.
                        </p>
                        <a href="#" class="cart">Add to Cart</a>
                    </div>
                    </div>
                </swiper-slide>
            </swiper> -->
            <div class="author-info">
                <div class="img"></div>
                <div class="info">
                    <span>About the Author</span>
                    <h3 class="name">Althemist</h3>
                    <p>Althemist strip steak sirloin filet mignon chuck ham hock venison meatloaf jerky flank, beef ribs shank. Short loin ham meatball sausage pork belly. Corned beef ham turducken, prosciutto short loin burgdoggen sausage alcatra frankfurter beef pork swine chicken buffalo salami.</p>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Card from '@/components/client/Card.vue';
import Footer from '@/components/client/Footer.vue';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	components: {
		Header,
        Footer,
        Card,
        swiper,
		swiperSlide,
	},
    data() {
        return {
            img:"https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-680x680.jpg",
            imgUrl:[
                'https://randomuser.me/api/portraits/thumb/men/75.jpg',
                'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2018/06/food-blog-1.jpg',
            ],
			listOption: {
				slidesPerView: 4,
				spaceBetween: 10,
				loop: true,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false
				},
				breakpoints: {
					1024: {
					slidesPerView: 4,
					spaceBetween: 40
					},
					768: {
					slidesPerView: 1,
					spaceBetween: 30
					},
					640: {
					slidesPerView: 1,
					spaceBetween: 20
					},
					320: {
					slidesPerView: 1,
					spaceBetween: 10
					}
				}
			}
        }
    }
}
</script>
