<template>
  <div>



	  <i-nav></i-nav>
	  <!-- top bar end -->

	  <div class="bf ">

		  <ul class="ul_f_2 clear t_center hidden">

			  <li>
				  <router-link :to="{name: 'info'}">
					  <img src="../assets/img/info.jpg">
				  </router-link>
			  </li>
			  <li>
				  <div class="" style="border-left:1px solid #eee;">
					  <p class="hd">
						  <router-link :to="{name: 'recommend'}">
							  <img src="../assets/img/recommend.jpg">
						  </router-link>
					  </p>
					  <router-link :to="{name: 'share'}">
						  <img src="../assets/img/share.jpg">
					  </router-link>
				  </div>
			  </li>
		  </ul>

	  </div>

	  <p class="t_center Fgray p10"><span style="color:#ddd;">——</span>最新推荐<span style="color:#ddd;">——</span></p>


	  <div class="clear tuan_list_2 icons top10" id="wrapper">
		  <div class="item " v-for="(items, indexs) in productsData.products">
			  <div class="item_box clear">
				  <div class="tuan_item_pic">
					  <div class="item_pic_img">

						  <router-link :to="{name: 'details', params: {index: indexs, cid: items.products_classid}}">
							  <img  :src="items.products_thumb" >
						  </router-link>
					  </div>
				  </div>
				  <div class="Fgray i_store">
					  {{ 'GO购购'+items.products_title }}
					  <div class="fr">{{ items.products_title }}</div>
				  </div>
				  <p class="title">
					  <span class="Fred"></span> {{ items.products_name }}
				  </p>
				  <div class="Fgray i_price">
					  <span class="flash_price"> {{ items.products_desc+'.00' }} </span>
					  <span class="market_price"> {{ items.products_desc_en }} </span>
				  </div>

			  </div>
		  </div>

	  </div>

	  <!-- content lists end -->

	  <i-footer></i-footer>
	  <!-- footer info end -->


  </div>
</template>
<script>

	import INav from '../components/nav.vue'
	import IFooter from '../components/footer.vue'
	import { mapGetters } from 'vuex'

	export default{
		name: 'home',
		computed: {
			...mapGetters({
				productsData: 'getProductsData'
			})
		},
	  data () {
	    return{
	      classids:''
	    }
	  },
		methods: {
			goItems (ids) {

				// 每个分馆
				this.classids = ids
				this.$store.dispatch('fetchProductsData', ids)
			}
		},
		created () {

			if(!!!this.$route.params.id){

				this.classids = ''
			}else{

				this.classids = this.$route.params.id
			}
		},
		mounted () {

			// 全球
			this.$store.dispatch('fetchProductsData', this.classids)

		},
		components: {
			INav,
			IFooter
		}
	}
</script>

<style>

</style>