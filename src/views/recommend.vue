<template>
	<div>
		<div class="share_info">
			<h1>推荐有钱收</h1>
			<div class="clear ptime hd">
				<router-link to='/'>
					<span class="edit time" >GO购购</span></a>
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
		name: 'recommend',
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
			this.$store.dispatch('fetchInfoData', '106')
		},
		components: {
			IFooter
		}
	}
</script>

<style>

</style>