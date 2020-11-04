<template>
	<div>
        <div class="full-screen-cover">
            <h2>Los Pollos's Blog</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque animi explicabo? Placeat dignissimos similique obcaecati vero, provident corrupti mollitia porro, voluptates laboriosam repellat fuga. Modi cupiditate distinctio corrupti nesciunt!</span>
        </div>
        <div class="blog-wraper container">
            <div class="articles">
                <div class="blog-card">
                    <div class="photo" 
                        :style="{ 'background-image': `url(${img})`}">
                    </div>
                    <h2>How to Make Jammy Soft Boiled Eggs at Home</h2>
                    <div class="author-label">
                        <img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt=""> 
                        <span> Althemist </span>
                        <span><i class="far fa-clock"></i>June 6, 2018</span>
                    </div>
                    <div class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum nemo, at quisquam aperiam iure, sint repudiandae impedit unde ducimus numquam. Repudiandae reiciendis illum quo nobis quaerat, rem, consequatur esse numquam ipsum, enim reprehenderit alias minima tempora. Ab, eligendi mollitia.
                        <a href="#">CONTINUE READING</a>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="photo" 
                        :style="{ 'background-image': `url(${img})`}">
                    </div>
                    <h2>How to Make Jammy Soft Boiled Eggs at Home</h2>
                    <div class="author-label">
                        <span> Althemist </span>
                        <span>June 6, 2018</span>
                    </div>
                    <div class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum nemo, at quisquam aperiam iure, sint repudiandae impedit unde ducimus numquam. Repudiandae reiciendis illum quo nobis quaerat, rem, consequatur esse numquam ipsum, enim reprehenderit alias minima tempora. Ab, eligendi mollitia.
                        <a href="#">CONTINUE READING</a>
                    </div>
                </div>
            </div>
            <div class="sidebar">
                <ul class="categories">
                    <h2>categories</h2>
                    <li>Food<span>(7)</span></li>
                    <li>Lifestyle<span>(5)</span></li>
                    <li>Party Time<span>(6)</span></li>
                    <li>Vegan<span>(3)</span></li>
                </ul>
                <div class="popular">
                    <h2>Popular Posts</h2>
                    <div class="articles">
                        <div class="article">
                            <div class="img-sm" :style="{ 'background-image': `url(${img})`}"></div>
                            <div class="content">
                                <p>My Favorite Easy Black Pizza Toast Recipe</p>
                                <span>May 19, 2018</span>
                            </div>
                        </div>
                        <div class="article">
                            <div class="img-sm" :style="{ 'background-image': `url(${img})`}"></div>
                            <div class="content">
                                <p>My Favorite Easy Black Pizza Toast Recipe</p>
                                <span>May 19, 2018</span>
                            </div>
                        </div>
                        <div class="article">
                            <div class="img-sm" :style="{ 'background-image': `url(${img})`}"></div>
                            <div class="content">
                                <p>My Favorite Easy Black Pizza Toast Recipe</p>
                                <span>May 19, 2018</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comments">
                    <h2>Recent Comments</h2>
                    <div class="visitors">
                        <div class="visitor">
                            <i class="far fa-comment"></i>
                            <div> 
                                <strong>Angela</strong>
                                on 
                                <a>How to Make Jammy Soft Boiled Eggs at Home</a>
                            </div>
                        </div>
                        <div class="visitor">
                            <i class="far fa-comment"></i>
                            <div> 
                                <strong>Angela</strong>
                                on 
                                <a>How to Make Jammy Soft Boiled Eggs at Home</a>
                            </div>
                        </div>
                        <div class="visitor">
                            <i class="far fa-comment"></i>
                            <div> 
                                <strong>Angela</strong>
                                on 
                                <a>How to Make Jammy Soft Boiled Eggs at Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
