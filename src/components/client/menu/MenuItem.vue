<template>
    <div class="menu-item container">
        <div class="img-group">
            <div class="zoom-image"
                :style="{ 'background-image': `url(${product['imgUrl'][currentImage]})` }">
            </div>
            <div class="swiper">
                <div class="img-item" 
                    :style="{ 'background-image': `url(${product['imgUrl'][i]})` }"
                    v-for="(item,i) in product['imgUrl']" :key="i" 
                    :class="{active : currentImage == i}"
                    @click="currentImage = i"
                ></div>
            </div>
        </div>
        <div class="content-group">
            <div class="info" v-if="product">
                <h1 class="title">{{product.title}}</h1>
                <div class="price">
                    <span>{{product.category}}</span>
                    <strong 
						class="current-total"
						:data-target="currentTotal"
					>{{currentTotal}}</strong>
                </div>
            </div>
            <div class="fast-picker">
				<div class="wraper">
					<h4>尺寸選擇</h4>
					<div class="input-group">
						<div class="input-wraper" 
						v-for="(item,i) in product.size" :key="i">
							<input type="radio" :id="`radio-${i}`" name="radio"
								:value="item" 
								v-model="currentSize"
							> 
							<label :for="`radio-${i}`" 
								:class="{active : currentSize == item}"
								@click="currentSize = item"
							>{{item.title}}</label>
						</div>
					</div>
				</div>
				<div class="wraper">
					<h4>額外配料</h4>
					<div class="input-group">
						<div class="input-wraper" 
						v-for="(item,i) in product.snack" :key="i">
							<input type="checkbox"  
								:id="`checkbox-${i}`"
								v-model="currentSnack[i]"
								:true-value="item" 
								:false-value="null" 
							> 
							<label :for="`checkbox-${i}`" 
								:class="{active : currentSnack[i] != null}">
								{{item.title}}
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="cart">
				<label for="num">數量</label>
				<span>
					<a href="#" class="left" @click.prevent="currentQty != 1 || NaN ? currentQty-- : currentQty = 1">-</a>
					<input type="text" 
					oninput = "value=value.replace(/[^\d]/g,'')"
					:placeholder="currentQty" v-model="currentQty" maxlength="2">
					<a href="#"  class="right" @click.prevent="currentQty++">+</a>
				</span>
				<a href="#" class="btn-add" @click.prevent="addToCart">加入購物車</a>
			</div>
			<p class="note">* 為因應原物料上漲，額外添加配料自<span>109/10/30</span>
			後酌收 <span>5 元 ~ 10 元</span>不等。</p>
        </div>
        <div class="tabs-group">
			<div class="tabs">
				<a class="tab" v-for="(item,i) in product['content']" :key="i" 
					:class="{active : currentTab == i}"
                    @click="currentTab  = i">
					{{item.title}}
				</a>
			</div>
			<div class="tab-content" v-for="(item,i) in product['content']" :key="i" v-show="currentTab  == i">
				{{item.content}}
			</div>	
		</div>
    </div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			currentImage:0,
			currentTab:0,
			currentSnack:{},	
			currentSize:'',	
			currentQty:1,	
			product:{
				title : '大俠漢堡包',
				category:'Burger',
				price:249,
				id:'-mrmry1256r4153',
				imgUrl:[
						'https://images.unsplash.com/photo-1522780550166-284a0288c8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
						'https://images.unsplash.com/photo-1530367305992-d9c28e8a49b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
						'https://images.unsplash.com/photo-1584799580661-53b7c6b99430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
						'https://images.unsplash.com/photo-1502550145-cd245e2ec6eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
				],
				content : [
					{
						title: '產品內容',
						content :'Hello World',
					},
					{
						title: '賞味期限',
						content : '24小時',
					},
					{
						title: '其他事項',
						content : 'LOREM',
					},
				],
				snack:{
					'-m6666':{
						title:'酸黃瓜',
						id:'-m6666',
						price:10
					},
					'-x7777':{
						title:'洋蔥圈',
						id:'-x7777',
						price:20
					},
					'-c9999':{
						title:'芥末籽',
						id:'-c9999',
						price:30
					},
				},
				size:{
					'-aa1111':{
						title:'S',
						id:'-aa1111',
						price:200
					},
					'-bb2222':{
						title:'M',
						id:'-bb2222',
						price:300
					},
					'-cc3333':{
						title:'L',
						id:'-cc3333',
						price:400
					},
				},
			},
			num:0,
		};
	},
	computed:{
		currentTotal () {
			const vm = this;
			let price = vm.currentSize.price || 0;
			let qty = vm.currentQty;
			let snackAry = []

			// [10,20,30] ~> Number(total)
			Object.values(vm.currentSnack).forEach((item)=>{
				if(item !== null) {
					snackAry.push(item.price);
				}
			});;
			let snackTotal = snackAry.reduce((prev, element) => {
				return prev + element;
			}, 0);
			return price * qty + snackTotal
		}
	},
	// watch:{
	// 	"currentTotal":function(){
	// 		const target = document.querySelector('.current-total').getAttribute('data-target')
	// 		// console.log(this.currentTotal , target);

	// 		this.updateCount(this.currentTotal)
	// 		// const speed = 2000;
	// 		// const inc = target / speed;
	// 	}
	// },
	methods:{
		addToCart(){
			if(this.currentSize == '') return alert('still not choice!') 
		},
/* 		updateCount(total){
			if(this.num < 10){
				this.num++
				console.log(this.num);
				setTimeout(this.updateCount , 100)
			} else {
				console.log('final:',this.num);
			}
		} */
	},
    mounted(){
		// 01. ajax from DB

		// 02. zoom effect
        const photoWraper = document.querySelector('.zoom-image')
        photoWraper.addEventListener('mousemove',(e)=>{
            let width = photoWraper.offsetWidth;
            let height = photoWraper.offsetHeight;

            let mouseX = e.offsetX;
            let mouseY = e.offsetY;

            let posX = (mouseX / width * 100);
			let posY = (mouseY / height * 100);
			
            photoWraper.style.backgroundPosition = `${posX}% ${posY}%`;
        })
        photoWraper.addEventListener('mouseout',(e)=>{
            photoWraper.style.backgroundPosition = 'center';
		})
		// 03. default size
		this.currentSize = Object.values(this.product.size)[1]
    },
};
</script>
