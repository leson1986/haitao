<template>
  <div>
	  <div class="h80">&nbsp;</div>
	  <div class="footer">
		  <ul>
			  <li @click="setFootNavStatus('home')" :class="{'i_on': footNavStatus=='home'}">
				  <router-link :to="{name: 'home'}">
					  <i class="c5"></i>全球馆
				  </router-link>
			  </li>
			  <li @click="setFootNavStatus('info')" :class="{'i_on': footNavStatus=='info'}">
				  <router-link :to="{name: 'info'}" >
					  <i class=""></i>漂流瓶
				  </router-link>
			  </li>
			  <!--<li >
				  <router-link :to="{name: 'search'}">
					  <i class="c2"></i>查询
				  </router-link>
			  </li>-->
			  <li>
				  <router-link :to="{name: 'car'}">
					  <i class="c3"></i>购物车
				  </router-link>
			  </li>
			  <li @click="setFootNavStatus('me')" :class="{'i_on': footNavStatus=='me'}">
				  <router-link :to="{name: 'me'}">
					  <i class="c4"></i>馆主
				  </router-link>
			  </li>
		  </ul>
	  </div>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default{
		name: 'footer',
		computed: {
			...mapGetters({
				footNavStatus: 'getFootNavStatus'
			})
		},
		name: 'footer',
	  data () {
	    return{
	      active:'home'
	    }
	  },
		methods: {

			setFootNavStatus (names) {
				this.$store.dispatch('fetchFootNavStatus', names)
			}
		},
		components: {
		}
	}
</script>

<style>

</style>