<template>
	<div class="blog">
		<Header />
        <router-view></router-view>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Footer from '@/components/client/Footer.vue';
export default {
	components: {
		Header,
		Footer,
	},
    data() {
        return {
        img:
            "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2018/06/food-blog-1.jpg",
        };
    }
}
</script>
