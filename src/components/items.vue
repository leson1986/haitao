<template>
	<div class="item_box clear">
		<div class="tuan_item_pic">
			<div class="item_pic_img">

				<router-link :to="{name: 'details'}">
					<img  src="http://static.haitao.com/img/2016/no/150.jpg?v=1" >
				</router-link>
			</div>
		</div>
		<div class="Fgray i_store"><a href="/tuan/store/view.php?id=1">海淘网美国OR</a>  <div class="fr">美国</div></div>
		<p class="title"><a href='http://www.haitao.com/tuan/571.html' target='_blank'><span class="Fred"></span> 美国 Happy Baby /禧贝  婴儿有机谷物米粉 198g 3段</a></p>
		<div class="Fgray i_price"><span class="flash_price">22.00</span> <span class="market_price">79</span> <span class="Fred">2.8折</span> <div class="fr icons"><a  href="javascript:void(0)"  onclick="dig(4,'571');return false;"><i class="dig c" id="dig_4_571">174</i></a></div>
		</div>

	</div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default{
		name: 'items',
		computed: {
			...mapGetters({
				productsData: 'getProductsData'
			})
		},
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },
		components: {
		}
	}
</script>

<style>

</style>