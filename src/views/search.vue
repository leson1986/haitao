<template>
  <div>

	  <div class="search_form">
		  <form action="/search/index.php">
			  <input type="search" name="q" id="search" class="inputs" value="" placeholder="输入关键词搜索">
			  <div class="search"></div><div class="search_cancel"><a href="?type=0">返回</a></div><input type="hidden" name="type" value="0">
		  </form>
	  </div>

	  <div class="bf top10">
		  <div class="bg p10">
			  <p>热门搜索</p>
		  </div>

		  <div class="s_words clear">
			  <a href="?type=0&amp;q=%E9%B1%BC%E6%B2%B9">鱼油</a>
			  <a href="?type=0&amp;q=%E9%9D%A2%E8%86%9C">面膜</a>
			  <a href="?type=0&amp;q=%E5%AD%95%E5%A6%87">孕妇</a>
		  </div>

	  </div>
	  <p class="t_center Fgray p10"><span style="color:#ddd;">——</span>搜索结果<span style="color:#ddd;">——</span></p>
	  <div class="clear tuan_list" id="wrapper">
		  <div class="item " v-for="n in 3">
			  <div class="item_box clear">
				  <div class="tuan_item_pic">
					  <div class="item_pic_img">
						  <a href='http://www.haitao.com/tuan/571.html' target='_blank'><img  src="http://static.haitao.com/img/2016/no/150.jpg?v=1" data-original="http://img5.haitao.com/sku/img/0/0/571/571_0.jpg!360"  onerror="nofind();"></a>
					  </div>
				  </div>
				  <div class="Fgray i_store"><a href="/tuan/store/view.php?id=1">海淘网美国OR</a>  <div class="fr">美国</div></div>
				  <p class="title"><a href='http://www.haitao.com/tuan/571.html' target='_blank'><span class="Fred"></span> 美国 Happy Baby /禧贝  婴儿有机谷物米粉 198g 3段</a></p>
				  <div class="Fgray i_price"><span class="flash_price">39.00</span> <span class="market_price">79</span> <span class="Fred">4.9折</span> <div class="fr icons"><a  href="javascript:void(0)"  onclick="dig(4,'571');return false;"><i class="dig c" id="dig_4_571">174</i></a></div>
				  </div>

			  </div>
		  </div>
	  </div>

	  <i-footer></i-footer>

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
		components: {
			IFooter
		}
	}
</script>

<style>

</style>