<template>
  <div>
	  <nav>
		  <div class="sub_nav clear">
			  <div class="swiper-container">
				  <div class="swiper-wrapper">
					  <div class="swiper-slide"><a href="/tuan/"  class="selected">全球</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=1&cid=&bid=&status=&sort=&q=" >美国</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=2&cid=&bid=&status=&sort=&q=" >中国</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=3&cid=&bid=&status=&sort=&q=" >韩国</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=4&cid=&bid=&status=&sort=&q=" >日本</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=5&cid=&bid=&status=&sort=&q=" >德国</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=12&cid=&bid=&status=&sort=&q=" >澳洲</a></div>
					  <div class="swiper-slide"><a href="/tuan/product/?aid=14&cid=&bid=&status=&sort=&q=" >荷兰</a></div>

					  <div class="swiper-slide"><span class="nav_search_2">&nbsp;</span></div></div>
			  </div>
			  <div class="nav_search"><a href="/search/">&nbsp;</a></div></div>

	  </nav>
	  <!-- top bar end -->

	  <div class="clear tuan_list_2 icons top10" id="wrapper">
		  <div class="item " v-for="n in 5">
			  <div class="item_box clear">
				  <div class="tuan_item_pic">
					  <div class="item_pic_img">
						  <a href='http://www.haitao.com/tuan/571.html' target='_blank'><img  src="http://static.haitao.com/img/2016/no/150.jpg?v=1" data-original="http://img5.haitao.com/sku/img/0/0/571/571_0.jpg!360"  onerror="nofind();"></a>
					  </div>
				  </div>
				  <div class="Fgray i_store"><a href="/tuan/store/view.php?id=1">海淘网美国OR</a>  <div class="fr">美国</div></div>
				  <p class="title"><a href='http://www.haitao.com/tuan/571.html' target='_blank'><span class="Fred"></span> 美国 Happy Baby /禧贝  婴儿有机谷物米粉 198g 3段</a></p>
				  <div class="Fgray i_price"><span class="flash_price">22.00</span> <span class="market_price">79</span> <span class="Fred">2.8折</span> <div class="fr icons"><a  href="javascript:void(0)"  onclick="dig(4,'571');return false;"><i class="dig c" id="dig_4_571">174</i></a></div>
				  </div>

			  </div>
		  </div>

	  </div>
  </div>
</template>
<script>
	export default{
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