<template>
	<div class="user-page">
        <Header />
		<div class="main-container">
				<ul class="sub-wraper">
					<li>
						<div class="user-img" 
						v-lazy:background-image="userPhoto"></div>
						<p class="user-name">Arron Chuang</p>
					</li>
					<li><router-link to="/user" class="user-link" active-class="active">帳戶</router-link></li>
					<li><router-link to="/user/profile" class="user-link" active-class="active">個人紀錄</router-link></li>
					<li><router-link to="/user/photo" class="user-link" active-class="active">照片</router-link></li>
				</ul>
				<router-view class="main-wraper"></router-view>
		</div>
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
			userPhoto:'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
		};
	},
};
</script>
