<template>
    <div class="done-page">
        <div class="bg-cover">
                <div class="cheers">購物完成拉 !</div>
        </div>
        <div class="texts">
            <router-link to="">繼續購物</router-link >
            <router-link to="">查看訂單</router-link >
        </div>
    </div>
</template>
<script>
import Footer from '@/components/client/Footer.vue';
export default {
    components:{
        Footer
    },
    data(){
        return{

        }
    }
}
</script>