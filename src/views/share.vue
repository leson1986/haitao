<template>
  <div>
	  <div class="share_info">
		  <h1>顾客须知</h1>
		  <div class="clear ptime hd">
			  <router-link to='/'>
				  <span class="edit time" >我要剁手</span></a>
			  </router-link>

		  </div>


		  <div class="clear info" v-html="infoData.info">
	    </div>




	  </div>

		<i-footer></i-footer>
  </div>
</template>
<script>

	import IFooter from '../components/footer.vue'
	import { mapGetters } from 'vuex'

	export default{
		name: 'share',
		computed: {
			...mapGetters({
				infoData: 'getInfoData'
			})
		},
	  data () {
	    return{
	      msg:'hello vue'
	    }
	  },
		mounted () {

			// 须知信息
			this.$store.dispatch('fetchInfoData', '101')
		},
		components: {
			IFooter
		}
	}
</script>

<style>

</style>