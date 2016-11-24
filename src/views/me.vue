<template>
  <div>
	  <div class="mini_head clear t_center">
		  <div class="mini_logo">

			  <router-link :to="{name: 'home'}">
				  <img src="../assets/img/gggou_logo.jpg" class="img_48">
			  </router-link>

		  </div>
		  <p>Go购购</p>
		  <div class="mini_head_bg"></div>
	  </div>

	  <!--<div class="bf">
		  <ul class="my_icon_4 clear">
			  <li><a href="/bz/lianmeng/"><i class="fanli"></i>海淘联盟</a></li>
			  <li><a href="/account/"><i class="account"></i>账户充值</a></li>
			  <li><a href="/address/"><i class="address"></i>收货地址</a></li>
			  <li><a href="/jifen/"><i class="jifen"></i>海淘积分</a></li>
		  </ul>
	  </div>-->

	  <div class="item">
		  <div class="bg clear">
			  <div class="fl">加我微信</div>
			  <div class="fr">

				  <router-link :to="{name: 'share'}">
					  <span class="fr_more time">下单必须</span>
				  </router-link>

			  </div>
		  </div>
		  <div>GGgouShop</div>
	  </div>
	  <div class="item">
		  <div class="bg clear">
			  <div class="fl">我的邮箱</div>
		  </div>
		  <div>cls-leson@163.com</div>
	  </div>
	  <div class="item">
		  <div class="bg clear">
			  <div class="fl">个人主页  </div>
		  </div>
		  <div>
			  <a href="http://www.swkid.com">
				  LESON'S HOME
			  </a>
		  </div>
	  </div>

	  <i-footer></i-footer>
	  <!-- footer info end -->
  </div>
</template>
<script>

	import IFooter from '../components/footer.vue'

	export default{
	  data () {
	    return{
	      msg:'hello vue'
	    }
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
	.mini_head_bg {
		background: url(../assets/img/mini_head_bg.jpg) repeat;
		background-size: 150%;
	}
</style>