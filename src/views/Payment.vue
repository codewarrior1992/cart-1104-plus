<template>
    <div class="payment-page">
        <Header/>
        <router-view></router-view>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Footer from '@/components/client/Footer.vue';
export default {
    components:{
        Header,
        Footer,
    },
    data(){
        return{
            isCard:false,
            img:'https://images.unsplash.com/photo-1602338038343-2c61288bbeea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
        }
    },
    methods:{},
    mounted(){
    }
}
</script>