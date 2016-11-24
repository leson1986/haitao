<template>
  <div>
	  <div class="box clear fixedbox">
		  <div class="fl icons"><i class="tips time">全场免单免税，一般3-10个工作日。</i></div>
		  <div class="fr">
			  <router-link :to="{name: 'home'}">
				  <span class="fr_more Fgreen">继续购物</span>
			  </router-link>
		  </div>
	  </div>

	  <div class="clear top10 margin50">

		  <div class="t_center p10" v-if="!carList.length">
			  购物车--四大皆空，
			  <router-link class="Fred" :to="{name: 'home'}">
				  我要购物
			  </router-link>
		  </div>

		  <div class="box clear foot10" id="store_1" v-for="items in carList">
			  <!--<div class="bg clear">

				  <h2 class="fl left10">{{ items.products_title }}</h2>
			  </div>-->

			  <ul class="car_list" id="store_pl_1">
				  <li class="clear" id="car_del_6620">

					  <div class="c_img">
						  <img :src="items.products_thumb" style="display: inline;">
					  </div>
					  <div class="c_name">
						  <div class="p_name">
							  {{ items.products_name }}
						  </div>
						  <div>
							  <span class="Fred Fbig">{{ items.products_desc }}元</span>
						  </div>
					  </div>
				  </li>
			  </ul>

			 <!-- <div>
				  <p class="time icons freight">
					  <i class="plane">快递：</i>
					  国内一般情况下发顺丰；国外直达另计
				  </p>
			  </div>-->

		  </div>


		  <div class="box clear">
			  <div class="fl icons">运费：<span class="Fred Fbig">0</span>元 &nbsp; 订单总额：<span class="Fred Fbig">{{ total }}</span>元(人民币)</div>
		  </div>
		  <!-- details lists end -->
	  </div>

	  <div class="h80">&nbsp;</div>
	  <div class="sku_car_foot clear">
		  <ul class="ul_f_2 clear ">
			  <li class="icons foot_collect">
				  <i class="review"> &nbsp; 微号: GGgouShop</i>
			  </li>
			  <li class="foot_add_car" @click="toOrder">
					  咨询与下单
			  </li>
		  </ul>
	  </div>


	  <div class="tipsBox" v-show="tips">

		  <p class="t_center">下单步骤</p>
		  <ul>
			  <li>1. 先把购物车中的购物清单截图，并保存至手机本地</li>
			  <li>2. 添加馆主微号：GGgouShop </li>
			  <li>3. 发送截图至馆主微号或扣扣，与馆主沟通并付款下单</li>
			  <li>友情提示：推荐下单有红包（详情请查阅：

				  <router-link :to="{name: 'recommend'}">
					  推荐有钱收
				  </router-link>
				  ）</li>
		  </ul>


		  <div class="tipsBtn">
			  <div class="fl tipsBtnLeft">
				  <div class="clear ptime " @click="toOrder">
					  <span class="edit time">去截图</span>
				  </div>
			  </div>
			  <div class="fl">
				  <div class="clear ptime ">
					  <router-link :to="{name: 'home'}">
						  <span class="edit time">继续购物</span>
					  </router-link>
				  </div>
			  </div>
		  </div>

	  </div>
  </div>
</template>
<script>

	import IFooter from '../components/footer.vue'
	import { mapGetters } from 'vuex'

	export default{
		name: 'car',
		computed: {
			...mapGetters({
					carList: 'getCarList'
			})
		},
		data () {
			return{
				total: 0,
				tips: false
			}
		},
		methods: {

			toOrder () {
				if(this.tips) {
					this.tips = !this.tips
					return
				}
				this.tips = true
			}
		},
		mounted () {
			this.carList.forEach((i, k)=>{

				this.total += Number(this.carList[k].products_desc)
			})
		},
		beforeDestroy () {
			this.$store.dispatch('fetchHeadNavStatus', '')
			this.$store.dispatch('fetchFootNavStatus', 'home')
		},
		components: {
			IFooter
		}
	}
</script>

<style>
.fixedbox {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	border-bottom: 1px solid #f03756;
}
.margin50 {
	margin-top: 50px;
}

.tipsBox {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0.87;
	background-color: #000;
	color: #fff;
	z-index: 1000;
}
	.tipsBox p {
		margin-top: 100px;
		font-size: 24px;
		padding: 15px 0;
	}
	.tipsBox ul {
		margin: 0  20px;
	}
	.tipsBox li {
		line-height: 25px;
	}
	.tipsBox li a {
		color: #fff;
	} 
	.tipsBox .tipsBtn {
		margin: 20px;
	}
	.tipsBox .tipsBtn .tipsBtnLeft {
		margin-right: 10px;
	}
</style>