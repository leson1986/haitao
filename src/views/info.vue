<template>
  <div>
	  <div id="wrapper" class="clear faxian_review_list">
		  <div class="item" v-for="items in infoList.list">
			  <div class="i_10">
				  <div class="hd clear">
					  <div class="fl">
						  <img src="../assets/img/gggou_logo.jpg"  class="img_36"></div>
					  <div class="fl left10">
						  {{ items.news_title }}<br>
						  <span class="time">{{ items.posttime }}</span>
						</div>
				  </div>

				  <div class="top10" v-html="items.news_content">
				  </div>

			  </div>
		  </div>


	  </div>

	  <i-footer></i-footer>
	  <!-- footer info end -->
  </div>
</template>
<script>
	import IFooter from '../components/footer.vue'
	import { mapGetters } from 'vuex'

	export default{
		name: 'info',
		computed: {
			...mapGetters({
				infoList: 'getInfoList'
			})
		},
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },
		beforeCreate () {
			this.$store.dispatch('fetchFootNavStatus', 'info')
		},
		beforeDestroy () {
			this.$store.dispatch('fetchHeadNavStatus', '')
		},
		mounted () {

			this.$store.dispatch('fetchInfoList')

		},
		components: {
			IFooter
		}
	}
</script>

<style>

</style>