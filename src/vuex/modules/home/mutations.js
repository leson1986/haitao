/**
 * Created by ls.c on 2016/11/3.
 */

export const START_LOADING = 'START_LOADING'
export const FINISH_LOADING = 'FINISH_LOADING'
export const FETCH_PRODUCTS_ALL_SUCCESS = 'FETCH_PRODUCTS_ALL_SUCCESS'
export const FETCH_PRODUCTS_ITEM_SUCCESS = 'FETCH_PRODUCTS_ITEM_SUCCESS'
export const FETCH_INFO_DATA_SUCCESS = 'FETCH_INFO_DATA_SUCCESS'
export const FETCH_INFO_LIST_SUCCESS = 'FETCH_INFO_LIST_SUCCESS'
export const FETCH_FEEDBACK_SUCCESS = 'FETCH_FEEDBACK_SUCCESS'
export const FETCH_CARLIST_SUCCESS = 'FETCH_CARLIST_SUCCESS'
export const FETCH_HEADNAVSTATUS_SUCCESS = 'FETCH_HEADNAVSTATUS_SUCCESS'
export const FETCH_FOOTNAVSTATUS_SUCCESS = 'FETCH_FOOTNAVSTATUS_SUCCESS'


const mutations = {

	// 开始加载动画
	[START_LOADING] (state) {
		state.loading = true
	},
	// 结束加载动画
	[FINISH_LOADING] (state) {
		state.loading = false
	},
	// 获取产品列表
	[FETCH_PRODUCTS_ALL_SUCCESS] (state, data) {
		state.productsData = data
	},
	// 获取半单个产品类型列表
	[FETCH_PRODUCTS_ITEM_SUCCESS] (state, data) {
		state.productsItem = data
	},
	// 获取须知信息与推荐信息
	[FETCH_INFO_DATA_SUCCESS] (state, data) {
		state.infoData = data
	},
	// 获取海沟信息列表
	[FETCH_INFO_LIST_SUCCESS] (state, data) {
		state.infoList = data
	},
	// 获取个人返回信息
	[FETCH_FEEDBACK_SUCCESS] (state, data) {
		state.feedbackInfo = data
	},
	// 保存购物车列表
	[FETCH_CARLIST_SUCCESS] (state, data) {
		state.carList = data
	},
	// 头部导航状态
	[FETCH_HEADNAVSTATUS_SUCCESS] (state, data) {
		state.headNavStatus = data
	},
	// 底部导航状态
	[FETCH_FOOTNAVSTATUS_SUCCESS] (state, data) {
		state.footNavStatus = data
	}
}

export default mutations