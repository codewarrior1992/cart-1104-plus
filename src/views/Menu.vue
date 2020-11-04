<template>
	<div class="menu-page">
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
		return {};
	},
};
</script>
