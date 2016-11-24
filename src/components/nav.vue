<template>
  <div class="hello">
	  <nav>
		  <div class="sub_nav clear">
			  <div class="swiper-container">
				  <div class="swiper-wrapper">
					  <div class="swiper-slide"><a @click="setHeadNavStatus('')" :class="{'selected': headNavStatus == '' }">全球</a></div>
					  <div class="swiper-slide"><a @click="setHeadNavStatus('4')" :class="{'selected': headNavStatus == 4}">美国馆</a></div>
					  <div class="swiper-slide"><a @click="setHeadNavStatus('16')" :class="{'selected': headNavStatus == 16}">香港馆</a></div>
					  <div class="swiper-slide"><a @click="setHeadNavStatus('40')" :class="{'selected': headNavStatus == 40}">中国馆</a></div>

				  </div>

	  </nav>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default{
		name: 'nav',
		computed: {
			...mapGetters({
				headNavStatus: 'getHeadNavStatus'
			})
		},
		data () {
			return{
			}
		},
		methods: {

			setHeadNavStatus (names) {

				this.$store.dispatch('fetchProductsData', names)
				this.$store.dispatch('fetchHeadNavStatus', names)
			}
		},
		components: {
		}
}
</script>
