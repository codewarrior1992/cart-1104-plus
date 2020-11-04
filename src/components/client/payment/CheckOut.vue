<template>
    <div class="checkout container">
        <div class="payment-wraper">
            <div class="payment-list">
                <h3>訂單詳細資料</h3>
                    <ul class="item">
                        <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                        <li>
                            <h3 class="title">UX & Web Design Master Course: Strategy, Design, Development</h3>
                            <p class="count">x 1</p>
                        </li>
                        <li>
                            <strong>$730<i class="fas fa-tag"></i></strong>
                            <span>$5,390</span>
                        </li>
                    </ul>
                    <ul class="item">
                        <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                        <li>
                            <h3 class="title">UX & Web Design Master Course: Strategy, Design, Development</h3>
                            <p class="count">x 7</p>
                        </li>
                        <li>
                            <strong>$730<i class="fas fa-tag"></i></strong>
                            <span>$5,390</span>
                        </li>
                    </ul>
                    <ul class="item">
                        <li class="img-wraper" v-lazy:background-image="imgUrl"></li>
                        <li>
                            <h3 class="title">UX & Web Design Master Course: Strategy, Design, Development</h3>
                            <p class="count">x 2</p>
                        </li>
                        <li>
                            <strong>$730<i class="fas fa-tag"></i></strong>
                            <span>$5,390</span>
                        </li>
                    </ul>
                </div>
                <div class="payment-process">
                    <h3>摘要</h3>
                    <div class="stretch">
                        <p>原價</p>
                        <span>$12,770</span>
                    </div>
                    <div class="stretch">
                        <p>優惠券折扣</p>
                        <span>-$11,140</span>
                    </div>
                    <div class="total stretch">
                        <p>總計</p>
                        <strong>$1630</strong>
                    </div>
                    <p class="word">法律要求 Los Pollos 就特定稅務管轄區內之購買交易徵收相對應的交易稅。完成購買程序，即代表您同意這些<a href="#">服務條款</a> 。</p>
                    <a href="#" class="chekout-done">完成付款</a>
                </div>
                <div class="payment-form">
                    <h3>付款方式</h3>
                    <div class="radio-group">
                        <input type="radio" name="payment" id="cash"> 
                        <label for="cash" @click="isCard=false">Cash</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="payment" id="card"> 
                        <label for="card" class="drop" @click="isCard=true">Credit Card</label>
                    </div>
                    <form :class="{ active : isCard === true }">
                        <div class="input-group">
                            <i class="far fa-user"></i>
                            <input type="text" id="user-name" placeholder="User Name">
                            <label for="user-name">User Name</label>
                        </div>
                        <div class="input-group">
                            <i class="fab fa-cc-visa"></i>
                            <input type="text" id="card-number" placeholder="0000 0000 0000 0000">
                            <label for="card-number">Card Number</label>
                        </div>
                        <div class="input-group">
                            <i class="fas fa-calendar-alt"></i>
                            <input type="text" id="expiry-date" placeholder="00 / 00">
                        <label for="expiry-date">Expiry-Date</label>
                        </div>
                        <div class="input-group">
                            <input type="text" id="cvc" placeholder="0000">
                            <label for="cvc">CVC</label>
                            <i class="fas fa-lock"></i>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isCard:false,
            imgUrl:'https://images.unsplash.com/photo-1602338038343-2c61288bbeea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
        }
    },
    methods:{},
    mounted(){
    }
}
</script>