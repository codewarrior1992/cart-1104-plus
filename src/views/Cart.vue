<template>
    <div class="cart-page">
        <Header />
        <div class="cart-warper container">
            <div class="cart-content container">
            <div class="list-group">
                    <div class="cart-list">
                        <h3 class="note">購物車內有 3 門課程</h3>
                        <ul class="item">
                                <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                                <li>
                                    <h3 class="title">Vue.js Master</h3>
                                    <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam nam dolor magni hic! Non quis tempore, laborum delectus id atque corporis vel officiis modi, mollitia, libero sed doloremque illo?</p>
                                </li>
                                <li>
                                    <a class="btn-submit">刪除</a>
                                    <a class="btn-submit">移至願望清單</a>
                                </li>
                                <li>
                                    <strong>$730<i class="fas fa-tag"></i></strong>
                                    <span>$5,390</span>
                                </li>
                        </ul>
                        <ul class="item">
                            <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                            <li>
                                <h3 class="title">Vue.js Master</h3>
                                <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam nam dolor magni hic! Non quis tempore, laborum delectus id atque corporis vel officiis modi, mollitia, libero sed doloremque illo?</p>
                            </li>
                            <li>
                                <a class="btn-submit">刪除</a>
                                <a class="btn-submit">移至願望清單</a>
                            </li>
                            <li>
                                <strong>$730<i class="fas fa-tag"></i></strong>
                                <span>$5,390</span>
                            </li>
                        </ul>
                    </div>
                    <div class="wish-list">
                        <h3 class="note">最近加入願望清單的項目</h3>
                        <ul class="item">
                            <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                            <li>
                                <h3 class="title">Vue.js Master</h3>
                                <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam nam dolor magni hic! Non quis tempore, laborum delectus id atque corporis vel officiis modi, mollitia, libero sed doloremque illo?</p>
                            </li>
                            <li>
                                <a class="btn-submit">刪除</a>
                                <a class="btn-submit">移至購物車</a>
                            </li>
                            <li>
                                <strong>$730<i class="fas fa-tag"></i></strong>
                                <span>$5,390</span>
                            </li>
                        </ul>
                        <ul class="item">
                            <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                            <li>
                                <h3 class="title">Vue.js Master</h3>
                                <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam nam dolor magni hic! Non quis tempore, laborum delectus id atque corporis vel officiis modi, mollitia, libero sed doloremque illo?</p>
                            </li>
                            <li>
                                <a class="btn-submit">刪除</a>
                                <a class="btn-submit">移至購物車</a>
                            </li>
                            <li>
                                <strong>$730<i class="fas fa-tag"></i></strong>
                                <span>$5,390</span>
                            </li>
                        </ul>
                        <ul class="item">
                            <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                            <li>
                                <h3 class="title">Vue.js Master</h3>
                                <p class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam nam dolor magni hic! Non quis tempore, laborum delectus id atque corporis vel officiis modi, mollitia, libero sed doloremque illo?</p>
                            </li>
                            <li>
                                <a class="btn-submit">刪除</a>
                                <a class="btn-submit">移至購物車</a>
                            </li>
                            <li>
                                <strong>$730<i class="fas fa-tag"></i></strong>
                                <span>$5,390</span>
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="process-group">
                    <p>總計</p>
                    <p class="total">$ 2,150</p>
                    <span>$12,770</span>
                    <strong>87% 折扣</strong>
                    <router-link to="">結帳</router-link>
                    <div class="input-group">
                        <input type="text" placeholder="輸入優惠券">
                        <a href="#" class="use">套用</a>
                    </div>
                    <div class="notice-word">
                        <i class="fas fa-times"></i>已套用 <strong>LEARNNOW</strong></div>
            </div>
            </div>
            <!-- swiper -->
            <h3 class="note">你可能也喜歡</h3>
            <swiper :options="listOption" class="cart-swiper">
                <swiper-slide>
                <Card/>
                </swiper-slide>
                <swiper-slide>
                <Card/>
                </swiper-slide>
                <swiper-slide>
                <Card/>
                </swiper-slide>
                <swiper-slide>
                <Card/>
                </swiper-slide>
            </swiper>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Footer from '@/components/client/Footer.vue';
import Card from '@/components/client/Card.vue';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    components:{
        Header,
        Footer,
        Card,
        swiper,
		swiperSlide,
    },
    data(){
        return{
            imgUrl:'https://images.unsplash.com/photo-1602338038343-2c61288bbeea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            listOption: {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 5000,
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
<style lang="scss" scoped>
.swiper-wraper{
    border-bottom: 1px solid #eaeaea;   
    width:100%;
    margin: 0 auto;
}
.swiper-slider{
    margin-bottom: 30px;
    padding: 30px 0 10px 0;
}
</style>