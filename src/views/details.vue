<template>
  <div>

	  <div class="product_info">
		  <div class="main_pic p10">
			  <img :src=productsData.products[indexs].products_thumb>
		  </div>
		  <div class="p10">
			  <h2 v-text="productsData.products[indexs].products_name"></h2>
			  <div class="Fgray hr clear top10">
				  <div class="fl">

					  <router-link :to="{name: 'home'}">
						  <span class="">{{ 'GO购购'+productsData.products[indexs].products_title }}</span>
					  </router-link>
					  <span class="flash_price">{{ '￥'+productsData.products[indexs].products_desc+'.00' }}</span>&nbsp;
					  <span class="market_price">{{ productsData.products[indexs].products_desc_en }}</span>
					  <span class="price_off">{{ (Number(productsData.products[indexs].products_desc)/Number(productsData.products[indexs].products_desc_en)*10).toFixed(1) }}折</span>
				  </div>
			  <ul class="clear icons  ul_f_4 top10 Fgray">
				  <li><i class="good">正品</i></li>
				  <li><i class="safe">保障</i></li>
				  <li><i class="location">{{ productsData.products[indexs].products_title }}</i></li>
				  <li><i class="plane"><span class="Fgray">运费</span></i></li>
			  </ul>
		  </div>

	  </div>


	  <div class="box top10 clear">
		  <div class="bg clear">
			  <h2 class="fl">商品简介</h2>
			  <div class="fr">

				  <router-link :to="{name: 'home'}">
					  <span class="fr_more Fgray">进入全球馆</span>
				  </router-link>
			  </div>
		  </div>
		  <p v-html="productsData.products[indexs].products_detail"></p>
	  </div>


	  <!--<div class="box top10 clear">

		  <div class="clear hr">
				  <div class="fl"><img src="../assets/img/gggou_logo.jpg"  class="img_24" style="display: inline;"></div>
				  <div class="fl">&nbsp;&nbsp;GO购购</div>
				  <div class="fl">&nbsp;<span class="time bk_red">{{ productsData.products[indexs].products_title }}</span></div>
			  <div class="fr">

				  <router-link :to="{name: 'home', params: {id: productsData.products[indexs].products_classid}}">
					  <span class="fr_more Fgray">进入分馆</span>
				  </router-link>
			  </div>
		  </div>

		  <ul class="ul_f_2 clear sku_list_2">
			  <li v-for="items in productsItem.proItem">
				  <div class="p10">
					  <div class="pic">

						  <router-link :to="{name: 'details', params: {index: indexs, cid: items.products_classid}}">
							  <img  :src="items.products_thumb"  style="display: inline;">
						  </router-link>
					  </div>
					  <div class="title">{{ items.products_name }}</div>
					  <div class="time">
						  <span class="flash_price">{{ items.products_desc+'.00' }}</span>
						  <span class="market_price time">{{ items.products_desc_en+'元' }}</span>
					  </div>
				  </div>
			  </li>
		  </ul>

	  </div>-->

	  <div class="h80">&nbsp;</div>
	  <div class="sku_car_foot clear">
		  <ul class="ul_f_2 clear ">
			  <li class="icons foot_collect">
				  <i class="review"> &nbsp; 微号: GGgouShop</i>
			  </li>
			  <li class="foot_add_car" @click="pushCar">
				  放入购物车
				  <!--<router-link :to="{name: 'car'}">
					  放入购物车
				  </router-link>-->
			  </li>
		  </ul>
	  </div>

	  <div id="web_back_tips" v-show="showCar" :class="{'fadeOut': showCar}">

		  <p>已放入购物车</p>
		  <p>
			  <router-link :to="{name: 'car'}">
				  <span class="edit">立即查看</span>
			  </router-link>
		  </p>
	  </div>
	  <div class="maskFixed" v-show="showCar"></div>

  </div>
</template>
<script>

	import INav from '../components/nav.vue'
	import { mapGetters } from 'vuex'

	export default{
		name: 'details',
		computed: {
			...mapGetters({
				productsData: 'getProductsData',
				productsItem: 'getProductsItem'
			})
		},
		data () {
			return{
				indexs: '',
				showCar: false
			}
		},
		created () {
			this.indexs = this.$route.params.index
			this.$store.dispatch('fetchProductsItem', this.$route.params.cid)
		},
		methods: {
			pushCar () {

				// 放入购物车
				let self = this
				let lists = []
				lists.push(self.productsData.products[self.$route.params.index])
				self.$store.dispatch('fetchCarList', lists)

				self.showCar = true
				setTimeout(()=>{
					self.showCar = false
				},1200)
			}

		},
		beforeDestroy () {
			this.$store.dispatch('fetchHeadNavStatus', '')
			this.$store.dispatch('fetchFootNavStatus', 'home')
		},
		components: {
			INav
		}
	}
</script>

<style>
	#web_back_tips {
	}
	@-webkit-keyframes fadeOut {
		0% {
			opacity: 1
		}
		75% {
			opacity: 1
		}

		100% {
			opacity: 0
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1
		}

		75% {
			opacity: 1
		}

		100% {
			opacity: 0
		}
	}

	.fadeOut {
		display: block;
		-webkit-animation-name: fadeOut;
		animation-name: fadeOut;
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both
	}

	.maskFixed {
		z-index: 1001;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>