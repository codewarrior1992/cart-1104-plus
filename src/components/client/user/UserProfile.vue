<template>
    <div>
        <div class="profile-title-wraper">
			<a class="wishes-tab acitve" @click="tabStatus = true">Wish List</a>
            <a class="orders-tab" @click="tabStatus = false">Order List</a>
		</div>
		<div class="profile-content-wraper">
            <div class="profile-content">
                <template v-if="tabStatus">
                <div class="wish-card">
                <div class="bg-cover" :style="{'background-image':`url(${img})`}"></div>
                <div class="card-content">
                    <h3 class="card-title">大神豬肉堡</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis?</p>
                    <ul class="ratings">
                        <li class="rating-item" data-rating="1"></li>
                        <li class="rating-item" data-rating="2"></li>
                        <li class="rating-item" data-rating="3"></li>
                        <li class="rating-item active" data-rating="4"></li>
                        <li class="rating-item" data-rating="5"></li>
                        <li><span class="num">(1445)</span></li>
                    </ul>
                </div> 
                <p class="price">$ 19,300</p>    
                </div>
                <div class="wish-card">
                    <div class="bg-cover" :style="{'background-image':`url(${img})`}"></div>
                    <div class="card-content">
                        <h3 class="card-title">大神豬肉堡</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis?</p>
                        <ul class="ratings">
                            <li class="rating-item" data-rating="1"></li>
                            <li class="rating-item" data-rating="2"></li>
                            <li class="rating-item" data-rating="3"></li>
                            <li class="rating-item active" data-rating="4"></li>
                            <li class="rating-item" data-rating="5"></li>
                            <li><span class="num">(1445)</span></li>
                        </ul>
                    </div> 
                    <p class="price">$ 19,300</p>    
                </div>
                <div class="wish-card">
                <div class="bg-cover" :style="{'background-image':`url(${img})`}"></div>
                <div class="card-content">
                    <h3 class="card-title">大神豬肉堡</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis?</p>
                    <ul class="ratings">
                        <li class="rating-item" data-rating="1"></li>
                        <li class="rating-item" data-rating="2"></li>
                        <li class="rating-item" data-rating="3"></li>
                        <li class="rating-item active" data-rating="4"></li>
                        <li class="rating-item" data-rating="5"></li>
                        <li><span class="num">(1445)</span></li>
                    </ul>
                </div> 
                <p class="price">$ 19,300</p>    
            </div>
            <div class="wish-card">
                <div class="bg-cover" :style="{'background-image':`url(${img})`}"></div>
                <div class="card-content">
                    <h3 class="card-title">大神豬肉堡</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis?</p>
                    <ul class="ratings">
                        <li class="rating-item" data-rating="1"></li>
                        <li class="rating-item" data-rating="2"></li>
                        <li class="rating-item" data-rating="3"></li>
                        <li class="rating-item active" data-rating="4"></li>
                        <li class="rating-item" data-rating="5"></li>
                        <li><span class="num">(1445)</span></li>
                    </ul>
                </div> 
                <p class="price">$ 19,300</p>    
            </div>
            <div class="wish-card">
                <div class="bg-cover" :style="{'background-image':`url(${img})`}"></div>
                <div class="card-content">
                    <h3 class="card-title">大神豬肉堡</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis?</p>
                    <ul class="ratings">
                        <li class="rating-item" data-rating="1"></li>
                        <li class="rating-item" data-rating="2"></li>
                        <li class="rating-item" data-rating="3"></li>
                        <li class="rating-item active" data-rating="4"></li>
                        <li class="rating-item" data-rating="5"></li>
                        <li><span class="num">(1445)</span></li>
                    </ul>
                </div> 
                <p class="price">$ 19,300</p>    
            </div>
                </template>
                <template v-else>
                    <table class="order-table">
                        <thead>
                            <tr>
                                <th width="200"># Order Uid</th>
                                <th>Order Content</th>
                                <th>Total Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text">
                                <td>-8rgehbetn-ete65146</td>
                                <td>
                                    <ul class="order-content">
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                    </ul>
                                </td>
                                <td>$ 2,790</td>
                                <td>2020-05-04</td>
                            </tr>
                            <tr>
                                <td>-8rgehbetn-ete65146</td>
                                <td>
                                    <ul class="order-content">
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                    </ul>
                                </td>
                                <td>$ 2,790</td>
                                <td>2020-05-04</td>
                            </tr>
                            <tr>
                                <td>-8rgehbetn-ete65146</td>
                                <td>
                                    <ul class="order-content">
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                    </ul>
                                </td>
                                <td>$ 2,790</td>
                                <td>2020-05-04</td>
                            </tr>
                            <tr>
                                <td>-8rgehbetn-ete65146</td>
                                <td>
                                    <ul class="order-content">
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                        <li>Lorem ipsum dolor sit amet. <span> x 1</span></li>
                                    </ul>
                                </td>
                                <td>$ 2,790</td>
                                <td>2020-05-04</td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </div>
            <Paignation/>
		</div>
    </div>
</template>
<script>
import Card from '@/components/client/Card.vue';
import Paignation from '@/components/client/Pagination.vue';
export default {
    components:{
        Card,
        Paignation
    },
    data(){
        return {
            tabStatus:false,
            img:'https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/tuscan-pizza.jpg'
        }
    }
}
</script>